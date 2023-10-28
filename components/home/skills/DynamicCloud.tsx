import React from "react";
import { fetchSimpleIcons, Cloud } from "react-icon-cloud";
import { renderCustomIcon, cloudProps } from ".";

export type DynamicCloudProps = {
  iconSlugs: string[];
};

type IconData = Awaited<ReturnType<typeof fetchSimpleIcons>>;

const DynamicCloud = (props: DynamicCloudProps) => {
  const color = "#000";
  const [data, setData] = React.useState<IconData>();
  React.useEffect(() => {
    fetchSimpleIcons({ slugs: props.iconSlugs }).then(setData);
  }, [props.iconSlugs]);
  const renderedIcons = React.useMemo(() => {
    if (!data) {
      return null;
    }

    const icons = [];
    for (const k of Object.keys(data.simpleIcons)) {
      icons.push(data.simpleIcons[k]);
    }

    return icons.map((i) => renderCustomIcon(i, color));
  }, [data, color]);

  return <Cloud {...cloudProps}>{renderedIcons}</Cloud>;
};

export default DynamicCloud;
