import * as React from "react";
import Image from "next/image";
import image from "../image/bars.png";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function RecentViewedDash() {
  return (
    <div className="dashboard-container">
      <h2 className="section-header pt-5 pb-5">Recent</h2>
      <div className="dashboard-items">
        <Card className="dashboard-item card-styles">
          <div className="left-side">
            <CardHeader>
              <CardTitle className="card-title">Logs</CardTitle>
              <CardDescription className="card-description">
                Updated 15 minutes ago
              </CardDescription>
              <CardDescription className="info-details log-styles">
                12 New Logs since update
              </CardDescription>
            </CardHeader>
          </div>
          <div className="visual-aid-card">
            <CardContent>
              <CardDescription className="visual-aid-card-header">
                Logs / Time
              </CardDescription>
              <Image className="image" src={image} alt="bar-graph" />
              <CardDescription className="visual-aid-card-description">
                Jan 2, 08:18:00
              </CardDescription>
            </CardContent>
          </div>
        </Card>
      </div>
    </div>
  );
}
