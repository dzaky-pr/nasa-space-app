"use client";

import { useState } from "react";
import * as RechartsPrimitive from "recharts";
import {
  CartesianGrid,
  Line,
  LineChart,
  Scatter,
  XAxis,
  YAxis,
} from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/Card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
} from "@/components/ui/Chart";

// Cosmic events data
const cosmicEvents = [
  { event: "Inflation", time: 13.8, redshift: 1000 },
  { event: "First Particles", time: 13.7, redshift: 100 },
  { event: "First Nuclei", time: 13.7, redshift: 20 },
  { event: "First Light", time: 13.42, redshift: 1100 },
  { event: "First Stars", time: 13.6, redshift: 15 },
  { event: "Galaxies & Dark Matter", time: 13.4, redshift: 10 },
  { event: "Dark Energy", time: 3.8, redshift: 0.5 },
  { event: "Today", time: 0, redshift: 0 },
];

// Chart config to define colors for each line
const chartConfig = {
  time: {
    label: "Time (Gyr)",
    color: "hsl(var(--chart-1))",
  },
} satisfies ChartConfig;

const CustomTooltip = ({
  active,
  payload,
}: React.ComponentProps<typeof RechartsPrimitive.Tooltip>) => {
  if (active && payload && payload.length) {
    const { event, time, redshift } = payload[0].payload;
    return (
      <div className="p-2 bg-white text-gray-800 border rounded shadow-md">
        <p className="font-bold">{event}</p>
        <p>Time: {time.toFixed(2)} Billion Years Ago</p>
        <p>Redshift: z={redshift}</p>
      </div>
    );
  }

  return null;
};

export function LookBackGraph() {
  const [yearIndex, setYearIndex] = useState(4);

  const filteredData = cosmicEvents.slice(0, yearIndex);

  // biome-ignore lint/suspicious/noExplicitAny: <explanation>
  const handleSliderChange = (event: any) => {
    setYearIndex(parseInt(event.target.value));
  };

  const error = console.error;
  // biome-ignore lint/suspicious/noExplicitAny: <explanation>
  console.error = (...args: any) => {
    if (/defaultProps/.test(args[0])) return;
    error(...args);
  };

  return (
    <section id="cosmic-chart" className="mx-auto p-4  max-w-screen-xl">
      <Card className="text-white   border-gray-700 mx-auto mt-2 ">
        <CardHeader>
          <CardTitle>Cosmic Lookback Chart</CardTitle>
          <CardDescription>Events from the Big Bang to Today</CardDescription>
        </CardHeader>
        <CardContent>
          <ChartContainer config={chartConfig}>
            <LineChart
              accessibilityLayer
              data={filteredData}
              margin={{
                left: 12,
                right: 12,
              }}
            >
              <CartesianGrid vertical={false} />
              {/* Redshift on the X axis */}
              <XAxis
                dataKey="redshift"
                tickLine={false}
                axisLine={false}
                tickMargin={8}
                label={{
                  value: "Redshift (z)",
                  position: "insideBottom",
                }}
                tickFormatter={(value) => `z = ${value}`}
              />

              <YAxis
                domain={[0, 14]}
                tickLine={false}
                axisLine={false}
                tickMargin={8}
                label={{
                  value: "Time (Billion Years)",
                  angle: -90,
                  position: "insideLeft",
                }}
              />

              <ChartTooltip cursor={false} content={<CustomTooltip />} />

              <Line
                dataKey="time"
                type="natural"
                stroke="var(--color-time)"
                strokeWidth={2}
                dot={{
                  fill: "var(--color-time)",
                }}
                activeDot={{
                  r: 6,
                }}
              />

              <Scatter data={filteredData} fill="var(--color-time)" />
            </LineChart>
          </ChartContainer>
        </CardContent>

        <CardContent>
          <input
            type="range"
            min="1"
            max={cosmicEvents.length}
            step="1"
            value={yearIndex}
            onChange={handleSliderChange}
            style={{ width: "100%" }}
          />
          <p>
            Showing events up to:{" "}
            {cosmicEvents[yearIndex - 1]?.event || "Today"}
          </p>
        </CardContent>

        <CardFooter className="flex-col items-start gap-2 text-sm">
          <div className="flex gap-2 font-medium leading-none">
            Showing Cosmic Events Over Time
          </div>
          <div className="leading-none text-muted-foreground">
            From 13.8 billion years ago to today.
          </div>
        </CardFooter>
      </Card>
    </section>
  );
}

export default LookBackGraph;
