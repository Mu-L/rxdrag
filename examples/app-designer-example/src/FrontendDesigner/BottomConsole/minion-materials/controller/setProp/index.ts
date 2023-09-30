import { NodeType } from "@rxdrag/minions-schema";
import { propSchema } from "./schema"
import { createId } from "@rxdrag/shared";
import { IControllerMeta, IPropConfig, SetProp } from "@rxdrag/minions-runtime-react";

import { IRxDragActivityMaterial } from "../../interfaces";
import { setPropIcon } from "../../../icons";
import { LogicflowContextParam } from "../../../types";
import { getControllerComponentInfo } from "../utils";

export const setPropMaterial: IRxDragActivityMaterial<IPropConfig, LogicflowContextParam> = {
  label: "$setProp",
  activityType: NodeType.Activity,
  defaultPorts: {
    inPorts: [
      {
        id: createId(),
        name: "input",
        label: "",
      },
    ],
    outPorts: [
      {
        id: createId(),
        name: "output",
        label: "",
      },
    ],
  },
  schema: propSchema,

  icon: (config?: IPropConfig, context?: LogicflowContextParam) => {
    const { material } = getControllerComponentInfo(config?.param, context?.engine)
    return material?.resource?.icon || setPropIcon
  },

  color: (config?: IPropConfig, context?: LogicflowContextParam) => {
    const { material } = getControllerComponentInfo(config?.param, context?.engine)
    return material?.resource?.color
  },

  title: (config?: IPropConfig, context?: LogicflowContextParam) => {
    const { node, material } = getControllerComponentInfo(config?.param, context?.engine)
    const ctrl = node?.meta["x-controller"] as IControllerMeta | undefined
    return ctrl?.name || material?.resource?.title || ctrl?.id
  },
  subTitle: (config?: IPropConfig, context?: LogicflowContextParam) => {
    const { material } = getControllerComponentInfo(config?.param, context?.engine)
    const prop = config?.param?.prop
    const label = material?.controller?.props?.find(pro => pro.name === prop)?.label
    const transedLabel = label?.startsWith("$")
              ? context?.engine?.getLocalesManager().getComponentSettingsMessage(material?.componentName||"", label.substring(1))
              : label
    return transedLabel || prop
  },
  activityName: SetProp.NAME,
}
