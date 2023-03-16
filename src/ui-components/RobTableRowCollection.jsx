/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Ansatt } from "../models";
import {
  getOverrideProps,
  useDataStoreBinding,
} from "@aws-amplify/ui-react/internal";
import RobTableRow from "./RobTableRow";
import { Collection } from "@aws-amplify/ui-react";
export default function RobTableRowCollection(props) {
  const { items: itemsProp, overrideItems, overrides, ...rest } = props;
  const [items, setItems] = React.useState(undefined);
  const itemsDataStore = useDataStoreBinding({
    type: "collection",
    model: Ansatt,
  }).items;
  React.useEffect(() => {
    if (itemsProp !== undefined) {
      setItems(itemsProp);
      return;
    }
    async function setItemsFromDataStore() {
      var loaded = await Promise.all(
        itemsDataStore.map(async (item) => ({
          ...item,
          AnsattTimers: await item.AnsattTimers.toArray(),
        }))
      );
      setItems(loaded);
    }
    setItemsFromDataStore();
  }, [itemsProp, itemsDataStore]);
  return (
    <Collection
      type="list"
      isPaginated={true}
      searchPlaceholder="Search..."
      itemsPerPage={15}
      direction="column"
      alignItems="stretch"
      justifyContent="left"
      items={items || []}
      {...getOverrideProps(overrides, "RobTableRowCollection")}
      {...rest}
    >
      {(item, index) => (
        <RobTableRow
          ansatt={item}
          height="25px"
          width="auto"
          margin="0 0 0px 0"
          key={item.id}
          {...(overrideItems && overrideItems({ item, index }))}
        ></RobTableRow>
      )}
    </Collection>
  );
}
