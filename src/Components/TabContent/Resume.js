import React from "react";
import {
  ResumeContentTemplate,
  TemplateHeading,
  TemplateItem,
} from "./ResumeContentTemplate";
import TabContentTemplate from "./TabContentTemplate";
import { portfolio, experience, activities } from "../../resumeData";

const Resume = () => {
  const portfolioIds = [1, 2, 3];
  const portfolioItems = portfolioIds.map((id) => {
    const portfolioItem = portfolio[id];

    const { dateRange, title, image } = portfolioItem;

    return (
      <TemplateItem
        key={id}
        dateRange={dateRange}
        title={title}
        image={image}
        url={`/resume/portfolio/${id}`}
      ></TemplateItem>
    );
  });

  const ExperienceIds = [1, 2, 3, 4];
  const experienceItems = ExperienceIds.map((id) => {
    const experienceItem = experience[id];

    const { dateRange, title, image } = experienceItem;

    return (
      <TemplateItem
        key={id}
        dateRange={dateRange}
        title={title}
        image = {image}
        url={`/resume/experience/${id}`}
      ></TemplateItem>
    );
  });

  const activityIds = [1, 2, 3];
  const activityItems = activityIds.map((id) => {
    const activityItem = activities[id];

    const { dateRange, title, image } = activityItem;

    return (
      <TemplateItem
        key={id}
        dateRange={dateRange}
        title={title}
        image={image}
        url={`/resume/activities/${id}`}
      ></TemplateItem>
    );
  });

  return (
    <TabContentTemplate>
      <ResumeContentTemplate>
        <TemplateHeading>Experience</TemplateHeading>
        {experienceItems}
      </ResumeContentTemplate>
      <ResumeContentTemplate>
        <TemplateHeading>Portfolio</TemplateHeading>
        {portfolioItems}
      </ResumeContentTemplate>
      <ResumeContentTemplate>
        <TemplateHeading>Extracurriculars / Activities</TemplateHeading>
        {activityItems}
      </ResumeContentTemplate>
    </TabContentTemplate>
  );
};

export default Resume;
