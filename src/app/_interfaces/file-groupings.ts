import {FileMeta} from 'cr-connect-workflow-lib/lib/types/file';

export interface FileGroup {
  group: string;
  files: FileMeta[];
}
