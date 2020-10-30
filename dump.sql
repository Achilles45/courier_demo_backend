--
-- PostgreSQL database dump
--

-- Dumped from database version 13.0
-- Dumped by pg_dump version 13.0

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: admin; Type: TABLE; Schema: public; Owner: courier
--

CREATE TABLE public.admin (
    "createdAt" bigint,
    "updatedAt" bigint,
    id character varying NOT NULL,
    "fullName" text,
    "emailAddress" text,
    password text
);


ALTER TABLE public.admin OWNER TO courier;

--
-- Name: archive; Type: TABLE; Schema: public; Owner: courier
--

CREATE TABLE public.archive (
    id character varying NOT NULL,
    "createdAt" bigint,
    "fromModel" text,
    "originalRecord" json,
    "originalRecordId" json
);


ALTER TABLE public.archive OWNER TO courier;

--
-- Name: message; Type: TABLE; Schema: public; Owner: courier
--

CREATE TABLE public.message (
    "createdAt" bigint,
    "updatedAt" bigint,
    id character varying NOT NULL,
    "fullName" text,
    "emailAddress" text,
    "phoneNumber" real,
    message text
);


ALTER TABLE public.message OWNER TO courier;

--
-- Name: package; Type: TABLE; Schema: public; Owner: courier
--

CREATE TABLE public.package (
    "createdAt" bigint,
    "updatedAt" bigint,
    id character varying NOT NULL,
    "receiversName" text,
    "receiversEmail" text,
    "totalItems" text,
    "currentLocation" text,
    insurance text,
    "sendersName" text,
    "sendersAddress" text,
    "shipingDate" text,
    "shipingAddress" text,
    weight text,
    "deliveryDate" text,
    status text,
    comment text
);


ALTER TABLE public.package OWNER TO courier;

--
-- Data for Name: admin; Type: TABLE DATA; Schema: public; Owner: courier
--

COPY public.admin ("createdAt", "updatedAt", id, "fullName", "emailAddress", password) FROM stdin;
1604032411636	1604041042258	63c456e5-48de-4c26-9f26-2ed02d36c214	Paul Okoye	paul@gmail.com	aaaaaaaaaa
\.


--
-- Data for Name: archive; Type: TABLE DATA; Schema: public; Owner: courier
--

COPY public.archive (id, "createdAt", "fromModel", "originalRecord", "originalRecordId") FROM stdin;
\.


--
-- Data for Name: message; Type: TABLE DATA; Schema: public; Owner: courier
--

COPY public.message ("createdAt", "updatedAt", id, "fullName", "emailAddress", "phoneNumber", message) FROM stdin;
\.


--
-- Data for Name: package; Type: TABLE DATA; Schema: public; Owner: courier
--

COPY public.package ("createdAt", "updatedAt", id, "receiversName", "receiversEmail", "totalItems", "currentLocation", insurance, "sendersName", "sendersAddress", "shipingDate", "shipingAddress", weight, "deliveryDate", status, comment) FROM stdin;
\.


--
-- Name: admin admin_emailAddress_key; Type: CONSTRAINT; Schema: public; Owner: courier
--

ALTER TABLE ONLY public.admin
    ADD CONSTRAINT "admin_emailAddress_key" UNIQUE ("emailAddress");


--
-- Name: admin admin_pkey; Type: CONSTRAINT; Schema: public; Owner: courier
--

ALTER TABLE ONLY public.admin
    ADD CONSTRAINT admin_pkey PRIMARY KEY (id);


--
-- Name: archive archive_pkey; Type: CONSTRAINT; Schema: public; Owner: courier
--

ALTER TABLE ONLY public.archive
    ADD CONSTRAINT archive_pkey PRIMARY KEY (id);


--
-- Name: message message_pkey; Type: CONSTRAINT; Schema: public; Owner: courier
--

ALTER TABLE ONLY public.message
    ADD CONSTRAINT message_pkey PRIMARY KEY (id);


--
-- Name: package package_pkey; Type: CONSTRAINT; Schema: public; Owner: courier
--

ALTER TABLE ONLY public.package
    ADD CONSTRAINT package_pkey PRIMARY KEY (id);


--
-- PostgreSQL database dump complete
--

