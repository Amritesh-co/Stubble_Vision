"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  Box,
  Heading,
  Text,
  SimpleGrid,
  Stack,
  Divider,
} from "@chakra-ui/react";
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
const MotionBox = motion(Box);

export default function DashboardPage() {
  const [summary, setSummary] = useState(null);
  const [loading, setLoading] = useState(true);
  const [firesOverTime, setFiresOverTime] = useState([]);
const [severityDist, setSeverityDist] = useState([]);
const [severityVsTime, setSeverityVsTime] = useState([]);
const [dnbrDist, setDnbrDist] = useState([]);

 useEffect(() => {
  fetch("http://127.0.0.1:8000/dashboard/summary")
    .then((res) => res.json())
    .then((data) => {
      setSummary(data);
      setLoading(false);
    })
    .catch(() => setLoading(false));

  fetch("http://127.0.0.1:8000/dashboard/fires-over-time")
    .then((res) => res.json())
    .then((data) => setFiresOverTime(Array.isArray(data) ? data : []))
    .catch(() => setFiresOverTime([]));

  fetch("http://127.0.0.1:8000/dashboard/severity-distribution")
    .then((res) => res.json())
    .then((data) => setSeverityDist(Array.isArray(data) ? data : []))
    .catch(() => setSeverityDist([]));

  fetch("http://127.0.0.1:8000/dashboard/severity-vs-time")
    .then((res) => res.json())
    .then((data) => setSeverityVsTime(Array.isArray(data) ? data : []))
    .catch(() => setSeverityVsTime([]));

  fetch("http://127.0.0.1:8000/dashboard/dnbr-distribution")
    .then((res) => res.json())
    .then((data) => setDnbrDist(Array.isArray(data) ? data : []))
    .catch(() => setDnbrDist([]));
}, []);


  return (
    <Box px={{ base: 6, md: 20 }} py={12}>
      
      {/* PAGE HEADER */}
      <Stack spacing={3} mb={10}>
        <Heading color="green.900">Dashboard</Heading>
        <Text color="gray.600" maxW="700px">
          Overview of agricultural fire activity and burn severity analysis
          derived from satellite observations.
        </Text>
      </Stack>

      <Divider mb={10} />

      {/* METRIC CARDS */}
    <SimpleGrid columns={{ base: 1, md: 4 }} spacing={6} mb={14}>
  <MetricCard
    index={0}
    title="Total Fires"
    value={summary?.total_fires}
    loading={loading}
  />
  <MetricCard
    index={1}
    title="High Severity"
    value={summary?.severity?.high}
    loading={loading}
  />
  <MetricCard
    index={2}
    title="Medium Severity"
    value={summary?.severity?.medium}
    loading={loading}
  />
  <MetricCard
    index={3}
    title="Low Severity"
    value={summary?.severity?.low}
    loading={loading}
  />
</SimpleGrid>

        {/* CHARTS */}
       <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>

  {/* FIRE COUNT VS TIME */}
  <ChartCard title="Fire Count Over Time">
    <ResponsiveContainer width="100%" height={250}>
      <LineChart data={firesOverTime}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="fire_date" />
        <YAxis />
        <Tooltip />
        <Line
          type="monotone"
          dataKey="count"
          stroke="#2f855a"
          strokeWidth={2}
        />
      </LineChart>
    </ResponsiveContainer>
  </ChartCard>

  {/* SEVERITY DISTRIBUTION */}
  <ChartCard title="Severity Distribution">
    <ResponsiveContainer width="100%" height={250}>
      <BarChart data={severityDist}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="severity" />
        <YAxis />
        <Tooltip />
        <Bar dataKey="count" fill="#dd6b20" />
      </BarChart>
    </ResponsiveContainer>
  </ChartCard>

  {/* SEVERITY VS TIME */}
  <ChartCard title="Severity vs Time">
    <ResponsiveContainer width="100%" height={250}>
      <AreaChart data={severityVsTime}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="date" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Area
          type="monotone"
          dataKey="low"
          stackId="1"
          stroke="#68d391"
          fill="#68d391"
        />
        <Area
          type="monotone"
          dataKey="medium"
          stackId="1"
          stroke="#f6ad55"
          fill="#f6ad55"
        />
        <Area
          type="monotone"
          dataKey="high"
          stackId="1"
          stroke="#fc8181"
          fill="#fc8181"
        />
      </AreaChart>
    </ResponsiveContainer>
  </ChartCard>

  {/* dNBR DISTRIBUTION */}
  <ChartCard title="dNBR Value Distribution">
    <ResponsiveContainer width="100%" height={250}>
      <BarChart data={dnbrDist}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="range" />
        <YAxis />
        <Tooltip />
        <Bar dataKey="count" fill="#805ad5" />
      </BarChart>
    </ResponsiveContainer>
  </ChartCard>

</SimpleGrid>
 

    </Box>
  );
}
function ChartCard({ title, children }) {
  return (
    <MotionBox
      bg="white"
      p={6}
      borderRadius="md"
      shadow="sm"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <Text fontSize="sm" color="gray.500" mb={3}>
        {title}
      </Text>
      {children}
    </MotionBox>
  );
}


/* ===================== COMPONENTS ===================== */

function MetricCard({ title, value, loading, index }) {
  return (
    <MotionBox
      bg="white"
      p={6}
      borderRadius="md"
      shadow="sm"
      borderLeft="4px solid"
      borderColor="green.600"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.4,
        delay: index * 0.1,
        ease: "easeOut",
      }}
    >
      <Text fontSize="sm" color="gray.500">
        {title}
      </Text>
      <Heading size="lg" color="green.800">
        {loading ? "Loading…" : value ?? "—"}
      </Heading>
    </MotionBox>
  );
}


function ChartPlaceholder({ title, index }) {
  return (
    <MotionBox
      bg="white"
      p={6}
      borderRadius="md"
      shadow="sm"
      minH="260px"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.5,
        delay: 0.2 + index * 0.1,
        ease: "easeOut",
      }}
    >
      <Text fontSize="sm" color="gray.500" mb={3}>
        {title}
      </Text>
      <Box
        bg="gray.100"
        h="180px"
        borderRadius="md"
        display="flex"
        alignItems="center"
        justifyContent="center"
        color="gray.400"
        fontSize="sm"
      >
        Chart will render here
      </Box>
    </MotionBox>
  );
}

