--
-- PostgreSQL database dump
--

-- Dumped from database version 13.2
-- Dumped by pg_dump version 13.2

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
-- Name: exam; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.exam (
    id integer NOT NULL,
    examclass text NOT NULL,
    examdate date NOT NULL
);


ALTER TABLE public.exam OWNER TO postgres;

--
-- Name: exam_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.exam_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.exam_id_seq OWNER TO postgres;

--
-- Name: exam_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.exam_id_seq OWNED BY public.exam.id;


--
-- Name: focus; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.focus (
    id integer NOT NULL,
    focus text
);


ALTER TABLE public.focus OWNER TO postgres;

--
-- Name: focus_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.focus_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.focus_id_seq OWNER TO postgres;

--
-- Name: focus_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.focus_id_seq OWNED BY public.focus.id;


--
-- Name: homework; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.homework (
    id integer NOT NULL,
    hwclass text NOT NULL,
    hwtask text NOT NULL,
    duedate date NOT NULL
);


ALTER TABLE public.homework OWNER TO postgres;

--
-- Name: homework_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.homework_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.homework_id_seq OWNER TO postgres;

--
-- Name: homework_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.homework_id_seq OWNED BY public.homework.id;


--
-- Name: playlist; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.playlist (
    id integer NOT NULL,
    song text NOT NULL
);


ALTER TABLE public.playlist OWNER TO postgres;

--
-- Name: playlist_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.playlist_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.playlist_id_seq OWNER TO postgres;

--
-- Name: playlist_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.playlist_id_seq OWNED BY public.playlist.id;


--
-- Name: todolist; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.todolist (
    id integer NOT NULL,
    task text NOT NULL
);


ALTER TABLE public.todolist OWNER TO postgres;

--
-- Name: todolist_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.todolist_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.todolist_id_seq OWNER TO postgres;

--
-- Name: todolist_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.todolist_id_seq OWNED BY public.todolist.id;


--
-- Name: exam id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.exam ALTER COLUMN id SET DEFAULT nextval('public.exam_id_seq'::regclass);


--
-- Name: focus id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.focus ALTER COLUMN id SET DEFAULT nextval('public.focus_id_seq'::regclass);


--
-- Name: homework id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.homework ALTER COLUMN id SET DEFAULT nextval('public.homework_id_seq'::regclass);


--
-- Name: playlist id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.playlist ALTER COLUMN id SET DEFAULT nextval('public.playlist_id_seq'::regclass);


--
-- Name: todolist id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.todolist ALTER COLUMN id SET DEFAULT nextval('public.todolist_id_seq'::regclass);


--
-- Data for Name: exam; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.exam (id, examclass, examdate) FROM stdin;
5	siber fisik	2021-07-03
6	proglan	2021-12-14
\.


--
-- Data for Name: focus; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.focus (id, focus) FROM stdin;
1	1. ngerjain tugas
2	2. istirahat
3	3. nonton film
\.


--
-- Data for Name: homework; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.homework (id, hwclass, hwtask, duedate) FROM stdin;
2	matek	tugas dah 	2021-07-03
3	jarkom	packet tracer	2021-05-09
10	dsd	bikin rangkaian	2021-09-16
\.


--
-- Data for Name: playlist; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.playlist (id, song) FROM stdin;
2	2. wendy - like water
3	3. fromis_9  - we go
1	1. nct dream - hot sauce
\.


--
-- Data for Name: todolist; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.todolist (id, task) FROM stdin;
22	main overcooked
23	ngerjain tp sbd
25	twtw
35	main hp
\.


--
-- Name: exam_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.exam_id_seq', 6, true);


--
-- Name: focus_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.focus_id_seq', 1, false);


--
-- Name: homework_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.homework_id_seq', 10, true);


--
-- Name: playlist_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.playlist_id_seq', 1, false);


--
-- Name: todolist_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.todolist_id_seq', 35, true);


--
-- PostgreSQL database dump complete
--

