"use client";
import React, { useState } from "react";

import AnimeCollection from "@/component/MainContainer/AnimeCollectionJikan";

import "./az.css";
import LoadingSpinner from "@/component/loadingSpinner";
import Navbar from "../Navbar/Navbar";
import Profilo from "../Profilo/Profilo";
import SignInSignUpModal from "../SignSignup/SignInSignUpModal";
import Footer from "../Footer/Footer";

export default function SearchResults(props) {
  const [selectL, setSelectL] = useState("en");
  const [profiIsOpen, setProfiIsOpen] = useState(false);
  const [logIsOpen, setLogIsOpen] = useState(false);
  const sign = (sign) => {
    setLogIsOpen(sign);
  };

  const lang = (lang) => {
    setSelectL(lang);
  };
  const [isLoading, setIsLoading] = useState(false);
  const IsLoading = (data) => {
    if (data) {
      setIsLoading(true);
      setTimeout(() => {
        setIsLoading(false);
      }, [20000]);
    }
  };
  return (
    <>
      <div>
          <Navbar
            lang={lang}
            sign={sign}
            setProfiIsOpen={setProfiIsOpen}
            profiIsOpen={profiIsOpen}
          />
          {profiIsOpen ? (
            <Profilo
              setProfiIsOpen={setProfiIsOpen}
              profiIsOpen={profiIsOpen}
            />
          ) : (
            ""
          )}
          {/* {logIsOpen ? (
            <SignInSignUpModal
              logIsOpen={logIsOpen}
              setLogIsOpen={setLogIsOpen}
              sign={sign}
            />
          ) : (
            ""
          )} */}
          {isLoading ? (
            <LoadingSpinner />
          ) : (
            <div className="contA">
              <div className="collections-W">
                <AnimeCollection
                  collectionName="Sort By Letters"
                  IsLoading={IsLoading}
                  selectL={selectL}
                  data={props.el}
                  totalPages={props.totalPages}
                  sort={props.sort}
                  page={props.page}
                  para={props.para}
                />
              </div>
            </div>
          )}

          <div>
            <Footer />
          </div>
      </div>
    </>
  );
}
