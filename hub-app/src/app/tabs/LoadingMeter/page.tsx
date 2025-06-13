"use client";

import { useState } from "react";

type Pallet = {
    lengthMM: number;
    widthMM: number;
};

export default function LoadingMeter() {
    const [length, setLength] = useState("");
    const [width, setWidth] = useState("");
    const [pallets, setPallets] = useState<Pallet[]>([]);
    const [result, setResult] = useState<number | null>(null);

    const handleAddPallet = () => {
        const lengthMM = parseFloat(length);
        const widthMM = parseFloat(width);

        if (
            isNaN(lengthMM) ||
            isNaN(widthMM) ||
            lengthMM <= 0 ||
            widthMM <= 0
        ) {
            alert("Ange giltiga värden i millimeter.");
            return;
        }

        setPallets([...pallets, { lengthMM, widthMM }]);
        setLength("");
        setWidth("");
        setResult(null);
    };

    const calculateTotal = () => {
        const total = pallets.reduce((sum, pallet) => {
            const lengthM = pallet.lengthMM / 1000;
            const widthM = pallet.widthMM / 1000;
            return sum + (lengthM * widthM) / 2.4;
        }, 0);

        setResult(total);
    };

    return (
        <div
            style={{
                maxWidth: 600,
                margin: "40px auto",
                fontFamily: "Arial, sans-serif",
                backgroundColor: "#f5f5f5",
                padding: "30px",
                borderRadius: "10px",
                boxShadow: "0 0 10px rgba(0,0,0,0.1)",
                color: "#333",
            }}>
            <h1 style={{ marginBottom: "20px" }}>Flakmeterräknare</h1>

            <label>
                Längd (mm):
                <input
                    type="number"
                    value={length}
                    onChange={(e) => setLength(e.target.value)}
                    style={{
                        display: "block",
                        marginBottom: 15,
                        padding: 10,
                        width: "100%",
                        borderRadius: "5px",
                        border: "1px solid #ccc",
                        backgroundColor: "#fff",
                    }}
                />
            </label>

            <label>
                Bredd (mm):
                <input
                    type="number"
                    value={width}
                    onChange={(e) => setWidth(e.target.value)}
                    style={{
                        display: "block",
                        marginBottom: 15,
                        padding: 10,
                        width: "100%",
                        borderRadius: "5px",
                        border: "1px solid #ccc",
                        backgroundColor: "#fff",
                    }}
                />
            </label>

            <button
                onClick={handleAddPallet}
                style={{
                    padding: 12,
                    marginBottom: 25,
                    backgroundColor: "#0066cc",
                    color: "#fff",
                    border: "none",
                    borderRadius: "5px",
                    cursor: "pointer",
                }}>
                ➕ Lägg till pall
            </button>

            <div>
                {pallets.map((pallet, index) => (
                    <div
                        key={index}
                        style={{
                            background: "#ffffff",
                            padding: 12,
                            marginBottom: 12,
                            borderLeft: "5px solid #0066cc",
                            borderRadius: "5px",
                            boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
                        }}>
                        Pall {index + 1}: {pallet.lengthMM} mm ×{" "}
                        {pallet.widthMM} mm
                    </div>
                ))}
            </div>

            <button
                onClick={calculateTotal}
                style={{
                    padding: 12,
                    backgroundColor: "#28a745",
                    color: "#fff",
                    border: "none",
                    borderRadius: "5px",
                    cursor: "pointer",
                }}>
                🧮 Beräkna total flakmeter
            </button>

            {result !== null && (
                <div
                    style={{
                        marginTop: 25,
                        fontWeight: "bold",
                        fontSize: "1.2rem",
                        backgroundColor: "#e9f8e9",
                        padding: "15px",
                        borderRadius: "5px",
                        border: "1px solid #c0e6c0",
                    }}>
                    Total flakmeter: {result.toFixed(2)} flm
                </div>
            )}
        </div>
    );
}
