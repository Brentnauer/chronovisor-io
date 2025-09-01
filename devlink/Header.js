"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./Header.module.css";

export function Header({ as: _Component = _Builtin.NavbarWrapper }) {
  return (
    <_Component
      className={_utils.cx(_styles, "navbar")}
      tag="div"
      config={{
        animation: "default",
        collapse: "medium",
        docHeight: false,
        duration: 400,
        easing: "ease",
        easing2: "ease",
        noScroll: false,
      }}
    >
      <_Builtin.NavbarContainer tag="div">
        <_Builtin.NavbarBrand
          options={{
            href: "#",
          }}
        >
          <_Builtin.Image
            loading="lazy"
            width="auto"
            height="auto"
            alt=""
            src="https://cdn.prod.website-files.com/68b2ef7f18815e14f847358f/68b2f3e4c1043de5adb2a809_apple-logo.svg"
          />
        </_Builtin.NavbarBrand>
        <_Builtin.NavbarMenu tag="nav" role="navigation">
          <_Builtin.NavbarLink
            className={_utils.cx(_styles, "nav-link")}
            options={{
              href: "#",
            }}
          >
            {"Home"}
          </_Builtin.NavbarLink>
          <_Builtin.DropdownWrapper tag="div" delay={0} hover={false}>
            <_Builtin.DropdownToggle
              className={_utils.cx(_styles, "dropdown-toggle")}
              tag="div"
            >
              <_Builtin.Icon
                className={_utils.cx(_styles, "icon")}
                widget={{
                  type: "icon",
                  icon: "dropdown-toggle",
                }}
              />
              <_Builtin.Block tag="div">{"File"}</_Builtin.Block>
            </_Builtin.DropdownToggle>
            <_Builtin.DropdownList tag="nav">
              <_Builtin.DropdownLink
                options={{
                  href: "#",
                }}
              >
                {"Link 1"}
              </_Builtin.DropdownLink>
              <_Builtin.DropdownLink
                options={{
                  href: "#",
                }}
              >
                {"Link 2"}
              </_Builtin.DropdownLink>
              <_Builtin.DropdownLink
                options={{
                  href: "#",
                }}
              >
                {"Link 3"}
              </_Builtin.DropdownLink>
            </_Builtin.DropdownList>
          </_Builtin.DropdownWrapper>
          <_Builtin.DropdownWrapper
            className={_utils.cx(_styles, "dropdown")}
            tag="div"
            delay={0}
            hover={false}
          >
            <_Builtin.DropdownToggle
              className={_utils.cx(_styles, "dropdown-toggle")}
              tag="div"
            >
              <_Builtin.Icon
                className={_utils.cx(_styles, "icon")}
                widget={{
                  type: "icon",
                  icon: "dropdown-toggle",
                }}
              />
              <_Builtin.Block tag="div">{"Edit"}</_Builtin.Block>
            </_Builtin.DropdownToggle>
            <_Builtin.DropdownList tag="nav">
              <_Builtin.DropdownLink
                options={{
                  href: "#",
                }}
              >
                {"Link 1"}
              </_Builtin.DropdownLink>
              <_Builtin.DropdownLink
                options={{
                  href: "#",
                }}
              >
                {"Link 2"}
              </_Builtin.DropdownLink>
              <_Builtin.DropdownLink
                options={{
                  href: "#",
                }}
              >
                {"Link 3"}
              </_Builtin.DropdownLink>
            </_Builtin.DropdownList>
          </_Builtin.DropdownWrapper>
          <_Builtin.NavbarLink
            className={_utils.cx(_styles, "nav-link")}
            options={{
              href: "#",
            }}
          >
            {"About"}
          </_Builtin.NavbarLink>
          <_Builtin.NavbarLink
            className={_utils.cx(_styles, "nav-link")}
            options={{
              href: "#",
            }}
          >
            {"Contact"}
          </_Builtin.NavbarLink>
        </_Builtin.NavbarMenu>
        <_Builtin.NavbarButton tag="div">
          <_Builtin.Icon
            widget={{
              type: "icon",
              icon: "nav-menu",
            }}
          />
        </_Builtin.NavbarButton>
      </_Builtin.NavbarContainer>
    </_Component>
  );
}
