import { Skeleton } from "antd";
import React from "react";

interface ListItemProps
{
    className?: string;
    children?: React.ReactNode;
    title: string;
    content: React.ReactNode;
    loading: boolean;
}
function ListItem({ className = '', children, title, content, loading }: ListItemProps): React.ReactElement
{

    return (
        <div className={`${className} grid grid-cols-listItem w-full py-4 px-8 last:border-0 border-listItem text-sm overflow-auto`}>
            <div className='text-black-darker font-semibold min-w-11'>{title}</div>
            <div className={`font-normal`}>
                {loading ? <Skeleton active paragraph={{ rows: 0 }} /> : content}
            </div>
        </div>
    );
}

export default ListItem;