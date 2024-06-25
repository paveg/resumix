import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";

type WorkHistory = {
  period: string;
  jobTitle: string;
  company: string;
  description?: string;
};

const companyNames = {
    freee: "freee K.K",
    acall: "Acall Inc."
}
const histories: WorkHistory[] = [
  {
    period: "Mar 2023 - Present",
    jobTitle: "Engineering Manager, Senior Software Engineer",
    company: companyNames.freee,
  },
  {
    period: "Jul 2022 - Mar 2023",
    jobTitle: "Tech Lead",
    company: companyNames.freee,
  },
  {
    period: "Feb 2020 - Jul 2022",
    jobTitle: "Tech Lead",
    company: companyNames.freee,
  },
  {
    period: "Aug 2017 - Jan 2020",
    jobTitle: "Software Engineer, Project Manager",
    company: companyNames.freee,
  },
  {
    period: "Aug 2018 - Mar 2019",
    jobTitle: "Application Engineer (freelance)",
    company: companyNames.acall,
  },
];

export const WorkExperiences = () => {
  return (
    <>
      {histories.map((history) => {
        return (
          <Card key={history.period}>
            <CardHeader>
              <CardTitle>{history.jobTitle}</CardTitle>
              <CardDescription>
                {history.company} | {history.period}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p>{history.description}</p>
            </CardContent>
          </Card>
        );
      })}
    </>
  );
};
