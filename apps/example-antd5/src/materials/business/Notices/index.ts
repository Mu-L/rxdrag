import { IComponentMaterial } from "@rxdrag/react-core";
import { Notices } from "components/business/Notices";
import { noticesIcon } from "./icon";
import { noticesLocales, noticesResourceLocales } from "./locales";
import { noticesSchema } from "./schema";

const name = "Notices"
export const NoticesMaterial: IComponentMaterial = {
  componentName: name,
  component: Notices,
  designer: Notices,
  designerLocales: noticesLocales,
  propsSchema: noticesSchema,
  resource: {
    name: name,
    icon: noticesIcon,
    color: "#dfa324",
    resourceLocales: noticesResourceLocales,
    elements: [
      {
        componentName: name,
      }
    ]
  },

  behaviorRule: {
    droppable: true,
    noPlaceholder: true,
  }
}
