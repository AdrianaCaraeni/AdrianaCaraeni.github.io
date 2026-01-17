import { useEffect } from "react";
import Navbar from "../components/Sections/Navbar";
import Footer from "../components/Sections/Footer";
import ResearchItem from "../components/ResearchItem";

const Research = () => {
  useEffect(() => {
    const scrollAnimElements = document.querySelectorAll(
      "[data-animate-on-scroll]"
    );
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting || entry.intersectionRatio > 0) {
            const targetElement = entry.target;
            targetElement.classList.add("animate");
            observer.unobserve(targetElement);
          }
        }
      },
      {
        threshold: 0.15,
      }
    );

    for (let i = 0; i < scrollAnimElements.length; i++) {
      observer.observe(scrollAnimElements[i]);
    }

    return () => {
      for (let i = 0; i < scrollAnimElements.length; i++) {
        observer.unobserve(scrollAnimElements[i]);
      }
    };
  }, []);

  const researchData = [
    {
      organization: "Center for Intelligent Information Retrieval",
      date: "Nov 2025 - Present",
      projects: [
        {
          title: "Information Retrieval Interpretability, Investigating IR Features in Reranking LLM",
          description: "This research investigates how large language models encode information retrieval features across their internal layers through neural network probing techniques. (extend paragraph here) Using RankLLaMA, a 7B parameter model, we extract the layer-wise activation patterns from query-document pairs in the MS MARCO dataset and applies ridge regression to predict traditional IR features—including BM25, TF-IDF cosine similarity, KL divergence, and Jensen-Shannon divergence—from these internal representations. The study computes R² scores across all 32 layers to quantify how well each layer's activations correlate with these retrieval metrics, revealing which layers encode specific ranking signals. By analyzing 98 queries and 50 documents per query, the research creates comprehensive visualizations showing the correlation strength between neural activations and IR features at different model depths. This probing methodology provides insights into the interpretability of neural ranking models, demonstrating how traditional information retrieval concepts are represented within transformer architectures. The findings contribute to understanding the internal mechanisms of neural rankers and could inform future model architectures optimized for retrieval tasks by identifying which layers are most important for encoding relevance signals.",
          link: null
        }
      ]
    },
    {
      organization: "Algoverse",
      date: "June 2025 - Present",
      projects: [
        {
          title: "HiPO: Hierarchical Preference Optimization for Adaptive Reasoning in Large Language Models",
          description: "This research introduces HiPO (Hierarchical Preference Optimization), a novel framework that extends Direct Preference Optimization (DPO) to improve reasoning capabilities in large language models. (extend paragraph here) While standard DPO treats responses as monolithic units, HiPO decomposes them into three distinct segments—refined query (Rq), meta-thinking reasoning steps (Mt), and final answer (A)—enabling targeted optimization of each component through segment-specific weighted losses. Experiments on 7B parameter models (Qwen-2.5 and Llama-3.1) fine-tuned on the Math Stack Exchange dataset demonstrate that HiPO outperforms standard DPO across multiple math benchmarks including GSM8K, MATH500, and AIME24, achieving gains of up to 13.89% on GSM8K. The framework maintains DPO's computational efficiency as a single-pass method while providing practitioners with adjustable segment weights to prioritize specific reasoning competencies—whether query interpretation, structured step-by-step reasoning, or answer formulation. GPT-4 evaluations confirm that HiPO-trained models exhibit superior organization, logical flow, and consistency compared to baseline approaches, suggesting that hierarchical decomposition of the reasoning process enables more effective alignment with human preferences for complex reasoning tasks.",
          link: null
        }
      ]
    },
    {
      organization: "Integrated Concentration in STEM",
      date: "Feb 2024 - Present",
      projects: [
        {
          title: "Quantum based Route Planning for Sustainable Transport",
          description: "This research explores the application of quantum computing to optimize route planning for sustainable transportation systems. Given that suboptimal routing contributes 5-10% extra fuel consumption in the U.S. transportation sector, which accounts for 28% of primary energy use, the study investigates whether quantum algorithms can provide more efficient solutions than classical approaches. (+ extend paragraph here) Using the Quantum Approximate Optimization Algorithm (QAOA) implemented through Qiskit, the team formulated routing problems as Quadratic Unconstrained Binary Optimization (QUBO) problems and tested them on graphs of varying sizes (N=5, 10, and 20 nodes). Results demonstrate that QAOA consistently achieves solution quality within 5-8% of optimal routes while consuming orders of magnitude less computational energy—operating in the picojoule range compared to nanojoules for classical methods like simulated annealing and genetic algorithms. The findings suggest that an 8.2% reduction in U.S. transportation fuel use through optimized routing could prevent approximately 194 million tons of CO₂ emissions annually. While challenges remain for scaling to larger, more complex routing problems with multiple vehicles and constraints, this work demonstrates the promising potential of quantum computing to deliver faster, more energy-efficient solutions for sustainable logistics and transportation networks.",
          link: "/icons_poster.pdf"
        }
      ]
    },
    {
      organization: "Early Research Scholars Program",
      date: "Sept 2024 - May 2025",
      projects: [
        {
          title: "Collecting and Utilizing LLM Preferences Using MTurk",
          description: "This research addresses the limitation of current large language models that use a one-size-fits-all approach by developing a system to collect and utilize user preferences for personalized question-answering. (extend paragraph here) Using Amazon Mechanical Turk, created an interactive interface where participants engage with 100 questions across various categories, selecting preferred responses from pairs generated by the LLM and providing explanations for their choices. The system collects comprehensive user interaction data—including ChatGPT history, selected questions, generated responses, and preference explanations—stored in AWS DynamoDB for real-time aggregation. Unlike previous methods that rely on stored user profiles and struggle with first-time queries or novel contexts, this approach gathers novel, high-quality preference data to train models using Direct Preference Optimization (DPO). The collected dataset will be used to fine-tune LLMs to adapt responses based on individual user preferences regarding tone, content format, and other attributes. Future work includes deploying the system to collect 100-300 surveys from diverse workers and implementing personalized response generation using vLLM and Hugging Face, ultimately creating a question-answering system that evolves with user engagement to enhance effectiveness in education, work, and daily life applications.",
          link: "/ersp_poster.pdf"
        }
      ]
    },
    {
      organization: "Machine Learning for Education",
      date: "May 2024 - April 2025",
      projects: [
        {
          title: "Evaluating GPT-4 at Grading Handwritten Solutions in Math Exams",
          description: "Using multimodal capabilities of Chat GPT 4o-mini to grade handwritten math exams. Completed data processing and testing using multiple levels of context, published at the Learning Analytics and Knowledge Conference. Demonstrated a 20% improvement in grading accuracy as compared to similar studies.",
          link: "https://arxiv.org/abs/2411.05231"
        },
        {
          title: "Explainable Grading: Chain of Thought Prompting",
          description: "This research investigates the application of large language models (LLMs) for automated essay grading by comparing various prompting techniques against fine-tuned models like BERT. (extend paragraph here) The study evaluates zero-shot, few-shot, and K-nearest neighbors (KNN) prompting methods alongside fine-tuned BERT and SBERT models on the ASAP dataset. (extend paragraph here) Results demonstrate that BERT achieves the strongest performance with the highest Pearson's correlation (0.848) and Adjacent Match Score (0.776), indicating superior ability to capture grading trends. However, the research highlights that KNN prompting offers a practical alternative, requiring minimal training data while achieving competitive accuracy. The findings suggest that while fine-tuned models currently outperform prompting-based approaches, few-shot techniques provide a scalable solution for automated grading in resource-constrained environments. This work contributes to the growing understanding of how different LLM paradigms can be leveraged for educational assessment tasks, balancing the trade-offs between model performance, data requirements, and computational resources.",
          link: null
        }
      ]
    }
  ];

  return (
    <div className="relative bg-primary-white w-full overflow-hidden flex flex-col items-center justify-start tracking-[normal]">
      <Navbar />
      <section
        className="self-stretch bg-primary-black overflow-hidden flex flex-row items-start justify-start py-[60px] pr-[97px] pl-20 box-border max-w-full text-left text-29xl text-primary-white font-heading-h6-semibold mq825:py-[25px] mq825:pr-12 mq825:pl-10 mq825:box-border mq450:pt-5 mq450:pr-0 mq450:pl-0 mq450:pb-5 mq450:box-border mq1425:pt-[39px] mq1425:pb-[39px] mq1425:box-border"
      >
        <div className="flex-1 overflow-hidden flex flex-col items-center justify-center py-0 px-8 box-border gap-[20px] max-w-full">
          <div className="self-stretch overflow-hidden flex flex-col items-start justify-start py-10 px-6 box-border gap-[32px] max-w-full text-center text-5xl mq825:gap-[16px] mq825:pt-5 mq825:pb-5 mq450:pl-0 mq450:pr-0 mq825:box-border mq1425:pt-[26px] mq1425:pb-[26px] mq1425:box-border">
            {researchData.map((research, index) => (
              <ResearchItem
                key={index}
                organization={research.organization}
                date={research.date}
                projects={research.projects}
              />
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Research;
