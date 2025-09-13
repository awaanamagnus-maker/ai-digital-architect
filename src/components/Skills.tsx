import { Card } from "@/components/ui/card";

const Skills = () => {
  const skills = [
    {
      title: "AI-Powered Solutions",
      description: "Workflow automation, AI chatbots, data-driven insights, predictive analytics.",
      icon: "🤖"
    },
    {
      title: "Web Development",
      description: "Responsive design, React & Tailwind CSS, SEO optimization, fast-loading web apps.",
      icon: "💻"
    },
    {
      title: "Digital Marketing",
      description: "Paid campaigns, content strategy, email funnels, social media growth, conversion optimization.",
      icon: "📈"
    }
  ];

  return (
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-primary">
            What I Bring to the Table
          </h2>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {skills.map((skill, index) => (
            <Card 
              key={index}
              className="p-8 text-center hover:shadow-card transition-all duration-300 hover:-translate-y-2 bg-card border-0 shadow-sm"
            >
              <div className="text-6xl mb-6">{skill.icon}</div>
              <h3 className="text-2xl font-bold mb-4 text-primary">
                {skill.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {skill.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;