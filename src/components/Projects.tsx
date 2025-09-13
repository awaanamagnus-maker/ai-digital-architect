import { Card } from "@/components/ui/card";

const Projects = () => {
  const projects = [
    {
      title: "AI-Powered Lead Generation",
      problem: "A startup was struggling to convert website traffic into qualified leads.",
      approach: "Implemented an AI chatbot + automated lead scoring system.",
      impact: "Lead conversions grew by 42% in three months, reducing cost-per-lead by 25%.",
      metric: "42% increase"
    },
    {
      title: "Website Performance Revamp",
      problem: "A digital agency's site was slow and not mobile-optimized.",
      approach: "Rebuilt site using React + Tailwind, optimized images, improved SEO.",
      impact: "Bounce rate dropped by 30%, average session time increased by 1.8 minutes, organic traffic rose 55%.",
      metric: "55% traffic growth"
    },
    {
      title: "Full-Funnel Marketing Campaign",
      problem: "A fashion-tech brand needed visibility for a new product launch.",
      approach: "Designed a cross-channel campaign using paid ads, email automation, and influencer outreach.",
      impact: "Achieved 3x ROI in six weeks and grew brand's social following by 20%.",
      metric: "3x ROI"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-primary">
            Case Studies
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Real projects, measurable results
          </p>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <Card 
              key={index}
              className="p-8 hover:shadow-elegant transition-all duration-300 hover:-translate-y-1 bg-card border-0 shadow-card group"
            >
              <div className="mb-6">
                <div className="inline-block px-4 py-2 bg-gradient-accent text-accent-foreground text-sm font-semibold rounded-full mb-4">
                  {project.metric}
                </div>
                <h3 className="text-2xl font-bold mb-4 text-primary group-hover:text-accent transition-colors">
                  {project.title}
                </h3>
              </div>
              
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-primary mb-2">Problem:</h4>
                  <p className="text-muted-foreground">{project.problem}</p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-primary mb-2">Approach:</h4>
                  <p className="text-muted-foreground">{project.approach}</p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-primary mb-2">Impact:</h4>
                  <p className="text-foreground font-medium">{project.impact}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;