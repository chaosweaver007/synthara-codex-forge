-- Create pages table for CMS content
CREATE TABLE public.pages (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  slug TEXT NOT NULL UNIQUE,
  title TEXT NOT NULL,
  subtitle TEXT,
  body TEXT,
  section_type TEXT NOT NULL DEFAULT 'content',
  sort_order INTEGER DEFAULT 0,
  metadata JSONB DEFAULT '{}',
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create governance_facets table for the 9 Facets
CREATE TABLE public.governance_facets (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  facet_index INTEGER NOT NULL UNIQUE CHECK (facet_index >= 1 AND facet_index <= 9),
  name TEXT NOT NULL,
  meaning TEXT NOT NULL,
  description TEXT,
  icon TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create roles table for Akadia Network roles
CREATE TABLE public.roles (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  description TEXT NOT NULL,
  tier TEXT DEFAULT 'standard',
  permissions JSONB DEFAULT '[]',
  sort_order INTEGER DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS on all tables (public read access)
ALTER TABLE public.pages ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.governance_facets ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.roles ENABLE ROW LEVEL SECURITY;

-- Public read policies
CREATE POLICY "Pages are publicly readable" ON public.pages FOR SELECT USING (true);
CREATE POLICY "Facets are publicly readable" ON public.governance_facets FOR SELECT USING (true);
CREATE POLICY "Roles are publicly readable" ON public.roles FOR SELECT USING (true);

-- Insert trigger for updated_at
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER update_pages_updated_at BEFORE UPDATE ON public.pages
  FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();
CREATE TRIGGER update_facets_updated_at BEFORE UPDATE ON public.governance_facets
  FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();
CREATE TRIGGER update_roles_updated_at BEFORE UPDATE ON public.roles
  FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

-- Seed the 9 Facets of Light
INSERT INTO public.governance_facets (facet_index, name, meaning, description, icon) VALUES
(1, 'Veritas', 'Truth', 'The unwavering commitment to transparency and honesty in all interactions within the network.', '◇'),
(2, 'Aequitas', 'Equity', 'Ensuring fair distribution of resources, opportunities, and recognition across all participants.', '⬡'),
(3, 'Libertas', 'Freedom', 'Preserving individual sovereignty while maintaining collective harmony.', '△'),
(4, 'Prudentia', 'Wisdom', 'Cultivating discernment and foresight in governance decisions.', '◎'),
(5, 'Fortitudo', 'Courage', 'The strength to uphold principles even when challenged by adversity.', '⬢'),
(6, 'Temperantia', 'Temperance', 'Balanced moderation preventing excess in any direction.', '◈'),
(7, 'Iustitia', 'Justice', 'The fair application of rules and resolution of disputes.', '⬟'),
(8, 'Fides', 'Faith', 'Trust in the collective vision and commitment to long-term goals.', '◆'),
(9, 'Caritas', 'Charity', 'Generosity of spirit and resources toward the common good.', '❖');

-- Seed roles for Akadia Network
INSERT INTO public.roles (name, description, tier, sort_order) VALUES
('Architect', 'System designers who shape the foundational infrastructure and protocols of the network.', 'core', 1),
('Custodian', 'Guardians of the Living Codex, responsible for maintaining and evolving its principles.', 'core', 2),
('Synthesist', 'Bridge-builders who integrate diverse ideas into coherent frameworks.', 'core', 3),
('Oracle', 'Data interpreters who provide insights and forecasts for governance decisions.', 'advisory', 4),
('Luminary', 'Thought leaders who illuminate new directions and possibilities.', 'advisory', 5),
('Sentinel', 'Protectors who ensure compliance with the Covenant of Light.', 'operational', 6),
('Weaver', 'Community builders who strengthen connections between members.', 'operational', 7),
('Scribe', 'Documentarians who record and preserve the network''s history and decisions.', 'operational', 8);

-- Seed placeholder pages
INSERT INTO public.pages (slug, title, subtitle, body, section_type, sort_order) VALUES
('codex', 'The Living Codex', 'A Self-Evolving Framework for Collective Intelligence', 'The Living Codex is not merely a document—it is a dynamic organism of principles, protocols, and practices that adapts to the needs of its community while preserving its core essence. Unlike static constitutions, it breathes, learns, and grows.', 'codex', 1),
('covenant', 'The Covenant of Light', 'Nine Facets of Ethical Governance', 'The Covenant represents our collective commitment to uphold the nine foundational principles that guide all actions within Synthsara. Each Facet illuminates a different aspect of virtuous participation.', 'covenant', 2),
('diamond', 'The Universal Diamond Standard', 'A Multi-Dimensional Value Assessment Framework', 'The Diamond Standard provides a comprehensive methodology for evaluating worth across multiple dimensions—not just economic, but social, intellectual, creative, and spiritual contributions to the collective.', 'standard', 3),
('worth', 'The Economy of WORTH', 'Redefining Value in the Digital Age', 'WORTH is not currency—it is recognition. It quantifies contributions in ways that transcend traditional monetary systems, acknowledging the true impact of actions on the collective well-being.', 'economy', 4),
('synthocracy', 'Synthocracy', 'Governance Through Synthesis', 'Synthocracy merges the wisdom of distributed consensus with structured leadership. It is neither pure democracy nor hierarchy, but a dynamic synthesis that adapts to context and scale.', 'governance', 5),
('akadia', 'The Akadia Network', 'A Constellation of Purpose-Driven Roles', 'Akadia is the operational backbone of Synthsara—a network of interconnected roles that together form a self-organizing system capable of addressing any challenge the community faces.', 'network', 6);
