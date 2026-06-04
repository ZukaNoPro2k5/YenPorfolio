/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Profile {
  name: string;
  studentId: string;
  phone: string;
  email: string;
  faculty: string;
  cohort: string;
  university: string;
  hobbies: string;
  intro: string;
  academicGoal: string;
  portfolioGoal: string;
}

export interface Project {
  id: string;
  title: string;
  shortTitle: string;
  objective: string;
  processSummary: string;
  reflection: string;
  pdfName: string;
  pdfPath: string;
  tags: string[];
}

export interface ConclusionSection {
  id: string;
  title: string;
  body: string;
}

export interface UserMessage {
  id: string;
  name: string;
  email: string;
  message: string;
  timestamp: string;
}
