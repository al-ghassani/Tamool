import teemy2 from "@/assets/gallery/teemy-2.jpeg";
import teemy3 from "@/assets/gallery/teemy-3.jpeg";
import teemy4 from "@/assets/gallery/teemy-4.jpeg";
import teemy5 from "@/assets/gallery/teemy-5.jpeg";

export interface Passion {
  title: string;
  excerpt: string;
  body: string;
  image: string;
}

const socioeconomicBody = `Socioeconomic health inequalities are best understood not as a single problem to be measured, but as a pattern that emerges across the life course through specific, identifiable mechanisms spanning exposures from utero conditions to organisational and policy environments. My work focuses on identifying and quantifying these mechanisms and suggests possible intervention points. I am particularly interested in how the long-term clinical and economic consequences of health events fall unevenly across subgroups, and in producing evidence, through linked administrative data, policy surveillance, and reproducible analytical frameworks, that enhances health systems' capacity and performance.`;

const policyInteractionBody = `Individuals and health policies interact dyadically: policies do not act on populations as a uniform force, and individuals do not respond to policies in isolation from the environments those policies create. The effect of a policy depends on who encounters it, where, and under what clinical and social conditions; the effect of an individual's behaviour or clinical event depends on the policy environment within which it unfolds. My work examines this interaction empirically, for example, in how continuity of midwifery care interacts with maternal characteristics to shape birth outcomes, in how municipal tobacco control policies translate into population-level behaviour through individual exposure, and in how women's long-term postpartum healthcare trajectories are co-produced by clinical events and the policy structures that shape care pathways. Understanding this dyadic interaction is necessary because it explains why uniform policies produce uneven outcomes, and why population-level interventions need to be evaluated with subgroup heterogeneity in mind.`;

const lifeCourseBody = `I approach population health through a life course lens, treating health outcomes as the product of trajectories rather than discrete events. My work examines how exposures and clinical events at one life stage propagate through specific mechanisms, biological, behavioural, organisational, and policy-related, to shape outcomes at later stages. This includes transgenerational and in-utero conditions that contribute to childhood and adult disease.`;

const realWorldBody = `A central aim of my work is to generate real-world evidence that health systems can act on. I draw on linked administrative, registry, electronic health record, cohort, and survey data from the Electronic Health Records, and national registries, to study questions that experimental designs cannot reach: how policies translate into population behaviour, how clinical events shape long-term outcomes, and how care pathways perform across subgroups. My work pairs this data with causal inference, applied econometric methods, and health economic evaluation, and translates the analyses into formats that policymakers, clinicians, and stakeholders can use, including reproducible pipelines, open dashboards, and harmonised analytical frameworks for cross-country comparison.`;

export const passions: Passion[] = [
  {
    title: "Socioeconomic Health Inequalities",
    excerpt:
      "Socioeconomic health inequalities are best understood not as a single problem to be measured, but as a pattern that emerges across the life course through specific, identifiable mechanisms.",
    body: socioeconomicBody,
    image: teemy2,
  },
  {
    title: "Individual–Health Policy Interaction",
    excerpt:
      "Individuals and health policies interact dyadically: policies do not act on populations as a uniform force, and individuals do not respond to policies in isolation from the environments those policies create.",
    body: policyInteractionBody,
    image: teemy3,
  },
  {
    title: "Life-course Epidemiology",
    excerpt:
      "I approach population health through a life course lens, treating health outcomes as the product of trajectories rather than discrete events.",
    body: lifeCourseBody,
    image: teemy4,
  },
  {
    title: "Real-World Evidence Generation",
    excerpt:
      "A central aim of my work is to generate real-world evidence that health systems can act on — linked administrative, registry, EHR, cohort, and survey data paired with causal inference and health economic evaluation.",
    body: realWorldBody,
    image: teemy5,
  },
];
