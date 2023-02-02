import React from "react";
import { Image, Table } from "react-bootstrap";
import { customers } from "../../constants/customers";

const Transactions = () => {
    return (
        <div>
            <h3>Recent Transactions</h3>
            <Table bordered hover className="my-2">
                <thead className="cursor">
                    <tr>
                        <th>ID</th>
                        <th>Item </th>
                        <th>Item Category</th>
                        <th>Customer Name</th>
                        <th>Payment Info</th>
                        <th>Price</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {customers.map((elem, index) => {
                        return (
                            <tr key={index} className-="p-5">
                                <th scope="row">{elem.id}</th>
                                <td>
                                    <Image
                                        src={elem.img}
                                        alt=""
                                        width={50}
                                        height={50}
                                        className="mx-1"
                                    />
                                    {elem.item}
                                </td>
                                <td>{elem.category}</td>
                                <td>{elem.customer}</td>
                                <td>{elem.payment}</td>
                                <td>{elem.price}</td>
                                <td>
                                    <span
                                        className={
                                            elem.status === "completed"
                                                ? " bg-success p-1 text-white rounded fw-bold"
                                                : "bg-warning p-1  text-white rounded fw-bold"
                                        }
                                    >
                                        {elem.status}
                                    </span>
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </Table>
        </div>
    );
};

export default Transactions;
