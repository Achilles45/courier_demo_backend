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
-- Name: package; Type: TABLE; Schema: public; Owner: courier
--

CREATE TABLE public.package (
    "createdAt" bigint,
    "updatedAt" bigint,
    id character varying NOT NULL,
    "receiversName" text,
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
1603942778210	1603942778210	6803261f-5eb5-404e-84ac-eeb0168518cc	Paul Okoye	paul@gmail.com	$2a$10$Xp/UquCEdZSKv8LVMbr4Tu/8PJOkyslAAcwsU42ZM.w5w.pE0ESLm
\.


--
-- Data for Name: archive; Type: TABLE DATA; Schema: public; Owner: courier
--

COPY public.archive (id, "createdAt", "fromModel", "originalRecord", "originalRecordId") FROM stdin;
\.


--
-- Data for Name: package; Type: TABLE DATA; Schema: public; Owner: courier
--

COPY public.package ("createdAt", "updatedAt", id, "receiversName", "totalItems", "currentLocation", insurance, "sendersName", "sendersAddress", "shipingDate", "shipingAddress", weight, "deliveryDate", status, comment) FROM stdin;
1603946369498	1603946369498	44b1203a-0edc-47a7-a29c-e433b882c9fd	Christian Pullisic	4	Egypt	Insured	Gilberto Silver	Egypt National Port	10/10/2020	Egypt National Port	500kg	20/10/2020	Moving	You will be notified for any changes
1603944998190	1603946214438	8ff0b321-f7e8-445f-8ef6-d8abb85b092c	Paul Smith	4	Egypt	Insured	Gilberto Silver	Egypt National Port	10/10/2020	Egypt National Port	500kg	20/10/2020	On Hold	You will be notified for any changes
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
-- Name: package package_pkey; Type: CONSTRAINT; Schema: public; Owner: courier
--

ALTER TABLE ONLY public.package
    ADD CONSTRAINT package_pkey PRIMARY KEY (id);


--
-- PostgreSQL database dump complete
--

