
import { useCallback, useState } from 'react';
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
  NodeTypes,
  Position,
} from '@xyflow/react';
import '@xyflow/react/dist/style.css';
import { ContextMenu, ContextMenuContent, ContextMenuTrigger } from './ui/context-menu';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle } from './ui/sheet';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from './ui/dialog';
import { Popover, PopoverContent, PopoverTrigger } from './ui/popover';

interface SkillCategory {
  title: string;
  icon: React.ReactNode;
  skills: string[];
}

interface SkillUsage {
  name: string;
  description: string;
  projects?: string[];
  experience?: string[];
}

// Sample skill usage data - in a real app, this would come from a proper data source
const skillUsages: Record<string, SkillUsage> = {
  "React": {
    name: "React",
    description: "A JavaScript library for building user interfaces.",
    projects: ["Portfolio Website", "E-commerce Dashboard", "Social Media App"],
    experience: ["3 years at TechCorp", "2 years at StartupX"]
  },
  "TypeScript": {
    name: "TypeScript",
    description: "A typed superset of JavaScript that compiles to plain JavaScript.",
    projects: ["Banking API", "Portfolio Website"],
    experience: ["2 years at FinTech Inc"]
  },
  "Node.js": {
    name: "Node.js",
    description: "JavaScript runtime built on Chrome's V8 JavaScript engine.",
    projects: ["REST API", "Backend Services", "Real-time Chat App"],
    experience: ["4 years at WebDev Agency"]
  },
  // More skills could be added here...
};

// Custom node components
const SkillNode = ({ data }: { data: { label: string; onClick: () => void } }) => {
  return (
    <div 
      className="px-4 py-2 shadow-md rounded-lg bg-card border border-border hover:border-primary transition-colors duration-300 cursor-pointer"
      onClick={data.onClick}
    >
      <div className="font-medium">{data.label}</div>
    </div>
  );
};

// Category node with styled header
const CategoryNode = ({ data }: { data: { label: string; icon: React.ReactNode } }) => {
  return (
    <div className="px-4 py-3 shadow-md rounded-lg bg-primary text-primary-foreground flex items-center gap-2">
      <div>{data.icon}</div>
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
  const [selectedSkill, setSelectedSkill] = useState<string | null>(null);
  const [isOpen, setIsOpen] = useState(false);

  // Handle node click
  const handleNodeClick = useCallback((skill: string) => {
    setSelectedSkill(skill);
    setIsOpen(true);
  }, []);

  // Generate nodes and edges from skill categories
  useState(() => {
    const newNodes: Node[] = [];
    const newEdges: Edge[] = [];
    
    const spacing = 200;
    let yPosition = 50;
    
    // Create roadmap-style layout
    skillCategories.forEach((category, categoryIndex) => {
      const categoryId = `category-${categoryIndex}`;
      
      // Position categories vertically
      const categoryY = yPosition;
      const categoryX = 150;
      
      // Add category node
      newNodes.push({
        id: categoryId,
        type: 'categoryNode',
        position: { x: categoryX, y: categoryY },
        data: { 
          label: category.title,
          icon: category.icon
        },
        targetPosition: Position.Left,
        sourcePosition: Position.Right,
      });
      
      // Position skills in horizontal row after the category
      category.skills.forEach((skill, skillIndex) => {
        const skillId = `skill-${categoryIndex}-${skillIndex}`;
        const skillX = categoryX + 220 + (skillIndex % 3) * 160;
        const skillY = categoryY + Math.floor(skillIndex / 3) * 80;
        
        // Add skill node
        newNodes.push({
          id: skillId,
          type: 'skillNode',
          position: { x: skillX, y: skillY },
          data: { 
            label: skill,
            onClick: () => handleNodeClick(skill)
          },
          targetPosition: Position.Left,
          sourcePosition: Position.Right,
        });
        
        // Add edge connecting category to skill
        newEdges.push({
          id: `edge-${categoryId}-${skillId}`,
          source: categoryId,
          target: skillId,
          type: 'smoothstep',
          animated: false,
          style: { stroke: 'rgba(100, 100, 100, 0.4)', strokeWidth: 2 },
        });
        
        // Connect skills to each other within the same category
        if (skillIndex > 0) {
          const prevSkillId = `skill-${categoryIndex}-${skillIndex - 1}`;
          if (skillIndex % 3 !== 0) { // Only connect horizontally aligned skills
            newEdges.push({
              id: `edge-${prevSkillId}-${skillId}`,
              source: prevSkillId,
              target: skillId,
              type: 'smoothstep',
              style: { stroke: 'rgba(100, 100, 100, 0.2)', strokeWidth: 1 },
            });
          }
        }
      });
      
      // Update vertical position for next category
      yPosition += Math.max(Math.ceil(category.skills.length / 3) * 80, 120);
    });
    
    setNodes(newNodes);
    setEdges(newEdges);
  }, [skillCategories, setNodes, setEdges, handleNodeClick]);

  const nodeTypes: NodeTypes = {
    skillNode: SkillNode,
    categoryNode: CategoryNode,
  };

  return (
    <div className="relative w-full h-[600px] rounded-lg border border-border bg-background/50">
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        nodeTypes={nodeTypes}
        fitView
        attributionPosition="bottom-right"
        minZoom={0.2}
        maxZoom={1.5}
        defaultViewport={{ x: 0, y: 0, zoom: 0.7 }}
        connectionLineType={ConnectionLineType.SmoothStep}
      >
        <Controls />
        <MiniMap 
          nodeStrokeWidth={3}
          zoomable 
          pannable
          className="bg-card border border-border rounded-md"
        />
        <Background color="#aaa" gap={16} />
      </ReactFlow>
      
      {/* Skill detail sheet */}
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>{selectedSkill}</SheetTitle>
            <SheetDescription>
              {selectedSkill && skillUsages[selectedSkill] 
                ? skillUsages[selectedSkill].description 
                : "A valuable technical skill in my toolkit"}
            </SheetDescription>
          </SheetHeader>
          <div className="py-6">
            {selectedSkill && skillUsages[selectedSkill] ? (
              <>
                {skillUsages[selectedSkill].projects && (
                  <div className="mb-6">
                    <h3 className="text-lg font-semibold mb-2">Projects</h3>
                    <ul className="list-disc pl-5 space-y-1">
                      {skillUsages[selectedSkill].projects.map((project, i) => (
                        <li key={i}>{project}</li>
                      ))}
                    </ul>
                  </div>
                )}
                
                {skillUsages[selectedSkill].experience && (
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Experience</h3>
                    <ul className="list-disc pl-5 space-y-1">
                      {skillUsages[selectedSkill].experience.map((exp, i) => (
                        <li key={i}>{exp}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </>
            ) : (
              <div className="text-muted-foreground">
                No detailed information available for this skill yet.
              </div>
            )}
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default SkillsGraph;
