
import { useCallback, useEffect, useState } from 'react';
import {
  ReactFlow,
  MiniMap,
  Controls,
  Background,
  useNodesState,
  useEdgesState,
  addEdge,
  Node,
  Edge,
  ConnectionLineType,
  MarkerType,
} from '@xyflow/react';
import '@xyflow/react/dist/style.css';

interface SkillCategory {
  title: string;
  icon: React.ReactNode;
  skills: string[];
}

// Custom node component for skills
const SkillNode = ({ data }: { data: { label: string } }) => {
  return (
    <div className="px-4 py-2 shadow-md rounded-lg bg-card border-2 border-border hover:border-primary transition-colors duration-300">
      <div className="font-bold">{data.label}</div>
    </div>
  );
};

// Custom node component for categories
const CategoryNode = ({ data }: { data: { label: string; icon: React.ReactNode } }) => {
  return (
    <div className="px-4 py-2 shadow-md rounded-lg bg-primary/10 border-2 border-primary flex items-center gap-2">
      <div className="text-primary">{data.icon}</div>
      <div className="font-bold text-lg">{data.label}</div>
    </div>
  );
};

interface SkillsGraphProps {
  skillCategories: SkillCategory[];
}

const SkillsGraph: React.FC<SkillsGraphProps> = ({ skillCategories }) => {
  const [nodes, setNodes, onNodesChange] = useNodesState([]);
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);
  const [initialized, setInitialized] = useState(false);

  const onConnect = useCallback((params: any) => {
    setEdges((eds) => addEdge(params, eds));
  }, [setEdges]);

  // Generate nodes and edges from skill categories
  useEffect(() => {
    if (initialized) return;
    
    const newNodes: Node[] = [];
    const newEdges: Edge[] = [];
    
    // Calculate the number of categories per row
    const categoriesPerRow = 4;
    const radius = 300; // radius for categories
    const skillRadius = 150; // radius for skills
    
    // Create nodes for categories
    skillCategories.forEach((category, categoryIndex) => {
      const categoryId = `category-${categoryIndex}`;
      const row = Math.floor(categoryIndex / categoriesPerRow);
      const col = categoryIndex % categoriesPerRow;
      
      // Position categories in a grid layout
      const categoryX = col * 350 + 200;
      const categoryY = row * 400 + 100;
      
      // Add category node
      newNodes.push({
        id: categoryId,
        type: 'categoryNode',
        position: { x: categoryX, y: categoryY },
        data: { 
          label: category.title,
          icon: category.icon
        },
      });
      
      // Create nodes for skills in a circular pattern around the category
      category.skills.forEach((skill, skillIndex) => {
        const angle = (skillIndex * 2 * Math.PI) / category.skills.length;
        const skillId = `skill-${categoryIndex}-${skillIndex}`;
        
        const skillX = categoryX + skillRadius * Math.cos(angle);
        const skillY = categoryY + skillRadius * Math.sin(angle);
        
        // Add skill node
        newNodes.push({
          id: skillId,
          type: 'skillNode',
          position: { x: skillX, y: skillY },
          data: { label: skill },
        });
        
        // Add edge connecting category to skill
        newEdges.push({
          id: `edge-${categoryId}-${skillId}`,
          source: categoryId,
          target: skillId,
          type: 'smoothstep',
          animated: false,
          style: { stroke: 'rgba(100, 100, 100, 0.3)', strokeWidth: 2 },
          markerEnd: {
            type: MarkerType.ArrowClosed,
            width: 15,
            height: 15,
            color: 'rgba(100, 100, 100, 0.3)',
          },
        });
      });
    });
    
    setNodes(newNodes);
    setEdges(newEdges);
    setInitialized(true);
  }, [skillCategories, setNodes, setEdges, initialized]);

  const nodeTypes = {
    skillNode: SkillNode,
    categoryNode: CategoryNode,
  };

  return (
    <div className="w-full h-[600px] rounded-lg border border-border">
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        nodeTypes={nodeTypes}
        fitView
        attributionPosition="bottom-right"
        minZoom={0.2}
        maxZoom={1.5}
        defaultViewport={{ x: 0, y: 0, zoom: 0.7 }}
        connectionLineType={ConnectionLineType.SmoothStep}
      >
        <Controls />
        <MiniMap className="border border-border rounded" zoomable pannable />
        <Background color="#aaa" gap={16} />
      </ReactFlow>
    </div>
  );
};

export default SkillsGraph;
