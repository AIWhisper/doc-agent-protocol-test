// Core message types for agent communication
export type AgentRole = 'orchestrator' | 'github' | 'docs';

export interface BaseMessage {
  id: string;                    // Unique message identifier
  timestamp: string;             // ISO timestamp
  correlationId: string;         // Groups related messages together
  sourceAgent: AgentRole;        // Agent sending the message
  targetAgent: AgentRole;        // Intended recipient
  priority: 1 | 2 | 3;           // 1: High, 2: Medium, 3: Low
}

// Message types for different stages of documentation
export type MessageType = 
  | 'TASK_REQUEST'              // Initial task assignment
  | 'TASK_ACCEPTED'             // Confirmation of task receipt
  | 'STATUS_UPDATE'             // Progress updates
  | 'RESOURCE_REQUEST'          // Request for additional info
  | 'REVIEW_REQUEST'            // Request for documentation review
  | 'REVIEW_FEEDBACK'           // Feedback on documentation
  | 'TASK_COMPLETED'            // Task completion notification
  | 'ERROR'                     // Error notification
  | 'SYNC'                      // Synchronization message

// Documentation-specific content types
export type DocType = 
  | 'API_REFERENCE'
  | 'SETUP_GUIDE'
  | 'ARCHITECTURE_DOC'
  | 'USER_GUIDE'
  | 'CHANGELOG'
  | 'CODE_EXAMPLE'
  | 'TROUBLESHOOTING'
  | 'RELEASE_NOTES';

// Documentation content structure
export interface DocContent {
  type: DocType;
  title: string;
  sections: {
    id: string;
    title: string;
    content: string;
    status: 'draft' | 'review' | 'approved';
  }[];
  metadata: {
    version: string;
    lastUpdated: string;
    contributors: string[];
    tags: string[];
    relatedDocs?: string[];
  };
}