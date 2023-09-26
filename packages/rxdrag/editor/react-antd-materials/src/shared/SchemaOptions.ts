import { IComponentEvent } from "./createControllerSchema";
import { ISlotSchema } from "./transSlotSchemas";
import { INodeSchema } from "@rxdrag/schema";
import { IFieldMeta } from "@rxdrag/fieldy";
import { ILogicFlowControllerMeta } from "@rxdrag/minions-runtime-react";

export type SchemaOptions = {
  propSchemas?: INodeSchema<IFieldMeta, ILogicFlowControllerMeta>[];
  slotSchemas?: ISlotSchema[];
  isArray?: boolean;
  canBindField?: boolean;
  //后面要删除
  events?: IComponentEvent[];
};
