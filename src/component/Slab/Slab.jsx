"use client";
import React from "react";
import { FaBell, FaCog, FaHeart, FaHistory, FaUser } from "react-icons/fa";
import Link from "next/link";
import "./slab.css";

export default function Slab(props) {
  return (
    <div className="allpit">
      <img
        className="allpit-background"
        src={
          "https://img.flawlessfiles.com/_r/100x100/100/avatar/demon_splayer/File11.jpg"
        }
        alt="pop"
      />
      <div className="hiik">Hi, {"user"}</div>
      <div className="linkok">
        {/* <Link
          href={"/user/profile"}
          className={`newPo ${props.slabId === "profile" ? "impot" : ""}`}
        >
          <div className="iconix">
            <FaUser />
          </div>
          <div className="namino">Profile</div>
        </Link> */}
        <Link
          href={"/user/continue-watching"}
          className={`newPo ${
            props.slabId === "continue watching" ? "impot" : ""
          }`}
        >
          <div className="iconix">
            <FaHistory />
          </div>
          <div className="namino">Continue Watching</div>
        </Link>
        <Link
          href={"/user/watch-list"}
          className={`newPo ${props.slabId === "watch list" ? "impot" : ""}`}
        >
          <div className="iconix">
            <FaHeart />
          </div>
          <div className="namino">Watch List</div>
        </Link>
        <Link
          href={"/user/notification"}
          className={`newPo ${props.slabId === "notification" ? "impot" : ""}`}
        >
          <div className="iconix">
            <FaBell />
          </div>
          <div className="namino">Notification</div>
        </Link>
        <Link
          href={"/user/settings"}
          className={`newPo ${props.slabId === "settings" ? "impot" : ""}`}
        >
          <div className="iconix">
            <FaCog />
          </div>
          <div className="namino">Settings</div>
        </Link>
      </div>
    </div>
  );
}
