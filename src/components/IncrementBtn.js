import "../assets/css/BookDetail.css";
import React from 'react';
import { BiChevronUp } from 'react-icons/bi';
import { BiChevronDown } from 'react-icons/bi';

function IncrementBtn({ count, setCount, width, height }) {

    return (
        <>
            <div style={{ width: `${width}`, height: `${height}` }}>
                <div className="detail-increment">
                    <span>{count}</span>
                    <div>
                        <div className="detail-add">
                            <button onClick={() => setCount(count + 1)}>
                                <BiChevronUp size={15} color="#8C8C8C" />
                            </button>
                        </div>
                        <div className="detail-delete">
                            <button
                                onClick={() => {
                                    setCount(count - 1);
                                    if (count <= 1)
                                        setCount(1);
                                }}
                            >
                                <BiChevronDown size={15} color="#8C8C8C" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default IncrementBtn;