import React from "react";
import EditButtonDashBoard from "./EditButton";
import DeleteButtonDashBoard from "./DeleteButton";
import { Link } from "react-router-dom";

const TbodyDashboard = ({ data, removeItem}) => {
    
    return (
        <tbody>
            {data.length > 0 && data.map((product) => {                
                return (
                    <tr key={product.id}>
                        <td scope="row">{product.id}</td>
                        <td scope="row">{product.title}</td>
                        <td scope="row">{product.content}</td>
                        <td className="text-danger" scope="row">
                            {product.price} VNĐ
                        </td>
                        <td scope="row">
                            <Link to={`/dashboard/product/edit/${product.id}`}>
                                <EditButtonDashBoard />
                            </Link>
                        </td>
                        <td scope="row">
                            <DeleteButtonDashBoard
                                id={product.id}
                                removeItem={removeItem}
                            />
                        </td>
                    </tr>
                );
            })}

        </tbody>
    );
};

export default TbodyDashboard;
