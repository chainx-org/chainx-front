import React from "react";
import ListItem from "./ListItem";

interface Item
{
    title: string;
    content: React.ReactNode;
    showData?: Object;
}
interface ListProps
{
    className?: string;
    children?: React.ReactNode;
    list: Item[];
    loading: boolean;
}
function List({
    className = "",
    list,
    loading,
}: ListProps): React.ReactElement
{
    return (
        <div
            className={`px-5 pb-4 bg-white-light shadow-card border border-b-card rounded-card whitespace-no-wrap`}
        >
            {list.map((item) =>
            {
                return (
                    <ListItem
                        key={item.title}
                        title={item.title}
                        content={item.content}
                        loading={loading}
                    />
                );
            })}
        </div>
    );
}

export default List;
