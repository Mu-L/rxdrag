import { Tag } from "@rxdrag/react-antd-components";
import { IComponentMaterial } from "@rxdrag/react-core";
import { IconViewMaterial } from "../IconView";
import { icon } from "./icon";
import { locales, resourceLocales, toolsLocales } from "./locales";
import { schema } from "./schema";
import { TagColorInput } from "./tools/TagColorInput";

const name = "Tag"
export const TagMaterial: IComponentMaterial = {
  componentName: name,
  component: Tag,
  designer: Tag,
  designerLocales: locales,
  propsSchema: schema,
  resource: {
    name: name,
    icon: icon,
    color: "#dfa324",
    resourceLocales: resourceLocales,
    elements: [
      {
        componentName: name,
        props: {
          value: name,
        }
      }
    ]
  },
  slots: {
    icon: IconViewMaterial,
  },
  toolsLocales: toolsLocales,
  tools:{
    TagColorInput,
  }
}
