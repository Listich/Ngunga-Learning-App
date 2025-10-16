import { Card } from "../../ui/card";
import { Badge } from "../../ui/badge";
import { motion } from "motion/react";
import { Play, Clock, Heart } from "lucide-react";
import { ImageWithFallback } from "../../figma/ImageWithFallback";
import { useState } from "react";

export function CultureScreenV2() {
  const [liked, setLiked] = useState<number[]>([]);

  const categories = [
    { id: 1, name: "Musique", emoji: "🎵", color: "bg-[#6BCB77]" },
    { id: 2, name: "Histoire", emoji: "📚", color: "bg-[#FFD56B]" },
    { id: 3, name: "Art", emoji: "🎨", color: "bg-[#C85C5C]" },
    { id: 4, name: "Cuisine", emoji: "🍲", color: "bg-[#6BCB77]" },
  ];

  const cultureItems = [
    {
      id: 1,
      title: "Rythmes Kongo Traditionnels",
      description: "Les tambours ancestraux et leur signification",
      image: "https://images.unsplash.com/photo-1650378047270-cdb8cb8334ef?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxBZnJpY2FuJTIwbXVzaWMlMjBpbnN0cnVtZW50c3xlbnwxfHx8fDE3NjAyMjU2NTd8MA&ixlib=rb-4.1.0&q=80&w=1080",
      duration: "5 min",
      category: "Musique",
      featured: true,
    },
    {
      id: 2,
      title: "Le Royaume Kongo",
      description: "Histoire d'un grand empire africain",
      image: "https://images.unsplash.com/photo-1627837586900-56adbee910a1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxDb25nbyUyMEFmcmljYW4lMjBjdWx0dXJlJTIwYXJ0fGVufDF8fHx8MTc2MDIyNTY1Nnww&ixlib=rb-4.1.0&q=80&w=1080",
      duration: "8 min",
      category: "Histoire",
      featured: true,
    },
    {
      id: 3,
      title: "Tissus & Pagnes",
      description: "L'art textile et ses motifs",
      image: "https://images.unsplash.com/photo-1758633854855-3059c5b48674?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxBZnJpY2FuJTIwcGF0dGVybnMlMjB0ZXh0aWxlfGVufDF8fHx8MTc2MDIyNTY1N3ww&ixlib=rb-4.1.0&q=80&w=1080",
      duration: "6 min",
      category: "Art",
      featured: false,
    },
    {
      id: 4,
      title: "Sagesse Ancestrale",
      description: "Proverbes et enseignements",
      image: "https://images.unsplash.com/photo-1629160477511-e5e730a661ee?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxBZnJpY2FuJTIwd29tYW4lMjB0cmFkaXRpb25hbCUyMGRyZXNzJTIwcG9ydHJhaXR8ZW58MXx8fHwxNzYwMjI1NjU3fDA&ixlib=rb-4.1.0&q=80&w=1080",
      duration: "4 min",
      category: "Histoire",
      featured: false,
    },
  ];

  const toggleLike = (id: number) => {
    setLiked((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
    );
  };

  return (
    <div className="min-h-screen pb-24">
      {/* Header */}
      <div className="bg-gradient-to-br from-[#C85C5C] to-[#B84C4C] rounded-b-[40px] pb-8 pt-6 px-6 mb-6">
        <div>
          <h2 className="text-white mb-1">Culture Kongo</h2>
          <p className="text-white/80">Découvre notre riche héritage 🌍</p>
        </div>
      </div>

      <div className="px-6 space-y-6">
        {/* Categories */}
        <div className="flex space-x-3 overflow-x-auto pb-2 no-scrollbar">
          {categories.map((category, index) => (
            <motion.button
              key={category.id}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              className={`${category.color} text-white px-6 py-3 rounded-full whitespace-nowrap flex items-center space-x-2 hover:scale-105 transition-transform shadow-md`}
            >
              <span>{category.emoji}</span>
              <span>{category.name}</span>
            </motion.button>
          ))}
        </div>

        {/* Featured Section */}
        <div>
          <h3 className="text-[#333333] mb-4">À la une ✨</h3>
          <div className="space-y-4">
            {cultureItems
              .filter((item) => item.featured)
              .map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="overflow-hidden border-0 shadow-xl hover:shadow-2xl transition-shadow cursor-pointer">
                    <div className="relative h-48">
                      <ImageWithFallback
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                      {/* Play Button */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <motion.div
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-2xl"
                        >
                          <Play className="w-8 h-8 text-[#6BCB77] ml-1" />
                        </motion.div>
                      </div>

                      {/* Duration Badge */}
                      <div className="absolute top-4 right-4">
                        <Badge className="bg-black/50 text-white border-0 backdrop-blur-sm">
                          <Clock className="w-3 h-3 mr-1" />
                          {item.duration}
                        </Badge>
                      </div>

                      {/* Like Button */}
                      <button
                        onClick={() => toggleLike(item.id)}
                        className="absolute top-4 left-4 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:scale-110 transition-transform"
                      >
                        <Heart
                          className={`w-5 h-5 ${
                            liked.includes(item.id)
                              ? "fill-[#C85C5C] text-[#C85C5C]"
                              : "text-gray-400"
                          }`}
                        />
                      </button>

                      {/* Info Overlay */}
                      <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                        <Badge className="bg-[#6BCB77] border-0 mb-2">
                          {item.category}
                        </Badge>
                        <h3 className="text-white mb-1">{item.title}</h3>
                        <p className="text-white/80 text-sm">{item.description}</p>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
          </div>
        </div>

        {/* More Content */}
        <div>
          <h3 className="text-[#333333] mb-4">Explorer plus</h3>
          <div className="grid grid-cols-2 gap-4">
            {cultureItems
              .filter((item) => !item.featured)
              .map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.2 + index * 0.1 }}
                >
                  <Card className="overflow-hidden border-0 shadow-lg hover:shadow-xl transition-shadow cursor-pointer">
                    <div className="relative h-32">
                      <ImageWithFallback
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                          <Play className="w-5 h-5 text-[#6BCB77] ml-0.5" />
                        </div>
                      </div>
                    </div>
                    <div className="p-3">
                      <h4 className="text-[#333333] text-sm mb-1 line-clamp-1">
                        {item.title}
                      </h4>
                      <div className="flex items-center justify-between">
                        <Badge
                          variant="secondary"
                          className="text-xs bg-[#FFD56B]/20 text-[#333333] border-0"
                        >
                          {item.category}
                        </Badge>
                        <span className="text-xs text-gray-500">
                          {item.duration}
                        </span>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}
