import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Send } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

const formSchema = z.object({
  name: z.string().min(2, "Le nom doit contenir au moins 2 caractères"),
  email: z.string().email("Email invalide"),
  message: z.string().min(10, "Le message doit contenir au moins 10 caractères"),
});

export default function Contact() {
  const { toast } = useToast();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    toast({
      title: "Message envoyé !",
      description: "Merci de m'avoir contacté. Je vous répondrai très bientôt.",
    });
    form.reset();
  }

  return (
    <section id="contact" className="py-24 bg-neutral-900 text-white relative">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16">
          
          {/* Info Side */}
          <div className="w-full lg:w-1/3">
            <h2 className="text-primary text-sm uppercase tracking-widest font-bold mb-2">Contact</h2>
            <h3 className="text-4xl font-serif font-bold text-white mb-8">Parlons de votre projet</h3>
            <p className="text-gray-400 mb-10 leading-relaxed">
              Vous avez une idée en tête ? Vous souhaitez collaborer ou commander une pièce unique ? N'hésitez pas à me contacter.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="bg-primary/20 p-3 rounded-full text-primary">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-white">Téléphone & WhatsApp</h4>
                  <p className="text-gray-400">01 61 79 16 27 (Téléphone)<br/>+229 67 38 69 59 (WhatsApp)</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-primary/20 p-3 rounded-full text-primary">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-white">Email</h4>
                  <p className="text-gray-400">Andychriscreat@gmail.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-primary/20 p-3 rounded-full text-primary">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-white">Localisation</h4>
                  <p className="text-gray-400">Quartier Avakpa,<br />Porto-Novo, Bénin</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form Side */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="w-full lg:w-2/3 bg-white/5 p-8 md:p-10 rounded-2xl border border-white/10"
          >
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-white">Nom Complet</FormLabel>
                      <FormControl>
                        <Input placeholder="Votre nom" {...field} className="bg-white/10 border-white/20 text-white placeholder:text-gray-500 focus:border-primary" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-white">Email</FormLabel>
                      <FormControl>
                        <Input placeholder="votre@email.com" {...field} className="bg-white/10 border-white/20 text-white placeholder:text-gray-500 focus:border-primary" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-white">Message</FormLabel>
                      <FormControl>
                        <Textarea placeholder="Comment puis-je vous aider ?" {...field} className="bg-white/10 border-white/20 text-white placeholder:text-gray-500 min-h-[150px] focus:border-primary" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-white py-6 text-lg rounded-xl font-bold uppercase tracking-wider">
                  Envoyer le message <Send className="ml-2 h-4 w-4" />
                </Button>
              </form>
            </Form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
