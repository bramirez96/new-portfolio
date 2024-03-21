// ! Copyright (c) 2024, Brandon Ramirez, brr.dev

import loadZone from "./loadZone";
import { GameDiscDefinition } from "./gameTypes";

export default {
    loadZone,
    welcomeMessage: [
        <div
            style={{
                border: "0.125rem dashed #F5F5F5",
                padding: "1rem 1.5rem",
                width: "max-content",
                textAlign: "center",
            }}
        >
            <em style={{ textDecoration: "underline" }}>Through the Looking Glass</em>
            <br />
            <span
                style={{
                    fontSize: "0.75rem",
                }}
            >
                Story by: Brandon Ramirez
            </span>
        </div>,
        <br />,
        <div
            style={{
                width: "max-content",
            }}
        >
            <div style={{ textAlign: "center", textDecoration: "underline" }}>Controls</div>
            <div style={{ fontSize: "0.875rem", marginTop: "0.25rem" }}>
                <div>go&nbsp;&nbsp;&nbsp;-&gt;&nbsp;move in a direction</div>
                <div>take&nbsp;-&gt;&nbsp;pick up an item</div>
                <div>i&nbsp;&nbsp;&nbsp;&nbsp;-&gt;&nbsp;view your inventory</div>
                <div>look&nbsp;-&gt;&nbsp;inspect a feature closely</div>
                <div>help&nbsp;-&gt;&nbsp;view controls and examples</div>
            </div>
        </div>,
        <br />,
    ],
} as GameDiscDefinition;
