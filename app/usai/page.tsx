'use client'
import { useState } from 'react';
import Link from "next/link";

const App = () => {
  const [selectedProgram, setSelectedProgram] = useState<string | null>(null);

  const programs = [
    {
      id: 'physical-robotics',
      title: 'Robot Builders',
      description: 'Build real robots that move and play!',
      icon: '🤖',
      color: 'from-orange-400 to-red-500',
      activities: ['🧱', '⚙️', '🦾', '🏆'],
      bgColor: 'bg-gradient-to-br from-orange-50 to-red-50'
    },
    {
      id: 'software-agents',
      title: 'Code Friends',
      description: 'Create digital buddies that learn and grow!',
      icon: '💻',
      color: 'from-blue-400 to-cyan-500',
      activities: ['🧠', '🎮', '🎨', '🚀'],
      bgColor: 'bg-gradient-to-br from-blue-50 to-cyan-50'
    },
    {
      id: 'ai-fundamentals',
      title: 'AI Explorers',
      description: 'Discover how smart machines think!',
      icon: '🧠',
      color: 'from-purple-400 to-pink-500',
      activities: ['🔍', '🎲', '📚', '💡'],
      bgColor: 'bg-gradient-to-br from-purple-50 to-pink-50'
    }
  ];

  const advancedPrograms = [
    {
      id: 'python-kids',
      title: 'Python Pals',
      description: 'Learn coding with fun games and stories!',
      icon: '🐍',
      color: 'from-green-400 to-blue-500',
      bgColor: 'bg-gradient-to-br from-green-50 to-blue-50',
      features: ['🎮 Game coding', '🎨 Create art', '📚 Story coding', '🏆 Coding badges']
    },
    {
      id: 'data-science',
      title: 'Data Detectives',
      description: 'Solve mysteries with numbers and patterns!',
      icon: '🔍',
      color: 'from-purple-400 to-pink-500',
      bgColor: 'bg-gradient-to-br from-purple-50 to-pink-50',
      features: ['📊 Fun charts', '🕵️‍♂️ Solve puzzles', '🎲 Play with data', '🏆 Detective badges']
    },
    {
      id: 'machine-learning',
      title: 'ML Makers',
      description: 'Teach computers to learn like you!',
      icon: '🧠',
      color: 'from-orange-400 to-red-500',
      bgColor: 'bg-gradient-to-br from-orange-50 to-red-50',
      features: ['🤖 Train robots', '🎨 Smart art', '🎮 AI games', '🏆 ML expert']
    }
  ];

  const testimonials = [
    { quote: 'I built a robot dog!', icon: '🐶', name: 'Liam', age: 6, stars: 5 },
    { quote: 'My AI found treasure!', icon: '🎮', name: 'Sophia', age: 5, stars: 5 },
    { quote: 'My robot dances!', icon: '🕺', name: 'Ethan', age: 6, stars: 5 }
  ];

  const events = [
    { date: 'Sep 15', title: 'Robot Pet Show', icon: '🐾', color: 'bg-amber-400' },
    { date: 'Oct 3', title: 'AI Story Time', icon: '📖', color: 'bg-purple-400' },
    { date: 'Oct 20', title: 'Family Coding', icon: '👨‍👩‍👧‍👦', color: 'bg-green-400' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-purple-50 to-pink-100">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center py-8">
            <div className="inline-block mb-6 relative">
              <div className="text-9xl animate-bounce transform hover:scale-110 transition">
                🤖
              </div>
              <div className="absolute -top-4 -right-4 bg-yellow-300 text-yellow-800 px-3 py-1 rounded-full text-xs font-bold animate-pulse">
                🚀
              </div>
            </div>
            
            <h1 className="text-6xl lg:text-7xl font-bold mb-4">
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                United School of Artificial Intelligence
              </span>
            </h1>
            
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6 leading-tight">
              Next-Gen
              <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                AI Architects
              </span>
            </h2>
            
            <p className="text-xl lg:text-2xl text-gray-700 mb-8 max-w-3xl mx-auto leading-relaxed">
              Turn your curiosity into creations! 
              Build robots, code friends, and explore AI magic!
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-8">
              <Link href="/usai/apply" className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-10 py-5 rounded-full text-xl font-bold shadow-lg hover:shadow-2xl transition transform hover:scale-105">
                🌟 Apply Now
              </Link>
              <button className="border-4 border-blue-400 text-blue-600 px-10 py-5 rounded-full text-xl font-bold hover:bg-blue-50 hover:shadow-xl transition transform hover:scale-105 bg-white/70 backdrop-blur-sm">
                ▶️ Watch Fun Video
              </button>
            </div>

            {/* Fun Stats */}
            <div className="grid grid-cols-3 gap-8 max-w-md mx-auto mt-8">
              <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-4 shadow-lg border-2 border-white">
                <div className="text-3xl mb-1">👧👦</div>
                <div className="text-2xl font-bold text-blue-600">5-10</div>
                <div className="text-sm text-gray-600">Ages</div>
              </div>
              <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-4 shadow-lg border-2 border-white">
                <div className="text-3xl mb-1">🎯</div>
                <div className="text-2xl font-bold text-purple-600">5</div>
                <div className="text-sm text-gray-600">Programs</div>
              </div>
              <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-4 shadow-lg border-2 border-white">
                <div className="text-3xl mb-1">🏆</div>
                <div className="text-2xl font-bold text-green-600">98%</div>
                <div className="text-sm text-gray-600">Happy</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section id="programs" className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h3 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
              Choose Your Adventure
            </h3>
            <p className="text-xl text-gray-700 max-w-2xl mx-auto">
              Pick your favorite way to create and learn!
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {programs.map((program) => (
              <div 
                key={program.id}
                className={`${program.bgColor} rounded-3xl p-8 shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105 cursor-pointer border-4 border-white ${
  selectedProgram === program.id ? 'scale-105 ring-4 ring-yellow-300' : ''
}`}
                onClick={() => setSelectedProgram(selectedProgram === program.id ? null : program.id)}
              >
                <div className="text-center">
                  <div className={`inline-block p-6 rounded-full bg-gradient-to-r ${program.color} text-white shadow-lg mb-6 transform hover:rotate-12 transition duration-300`}>
                    <span className="text-8xl">{program.icon}</span>
                  </div>
                  
                  <h4 className="text-3xl font-bold text-gray-800 mb-4">{program.title}</h4>
                  <p className="text-lg text-gray-700 mb-6 leading-relaxed">{program.description}</p>
                  
                  <div className="flex justify-center space-x-6 mb-6">
                    {program.activities.map((activity, index) => (
                      <div 
                        key={index} 
                        className="text-3xl transform hover:scale-125 transition duration-300 hover:animate-bounce"
                        style={{ animationDelay: `${index * 100}ms` }}
                      >
                        {activity}
                      </div>
                    ))}
                  </div>

                  {selectedProgram === program.id && (
                    <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 border-2 border-yellow-200 animate-fadeIn">
                      <p className="text-lg font-bold text-purple-600">
                        Let&apos;s create something amazing! ✨
                      </p>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Advanced Programs Section */}
      <section className="py-16 bg-gradient-to-r from-green-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h3 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
              Super Skills for Bigger Kids! 🚀
            </h3>
            <p className="text-xl text-gray-700 max-w-2xl mx-auto">
              Ready for more advanced adventures? Learn real coding skills through play!
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {advancedPrograms.map((program) => (
              <div 
                key={program.id}
                className={`${program.bgColor} rounded-3xl p-8 shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105 border-4 border-white`}
              >
                <div className="text-center">
                  <div className={`inline-block p-6 rounded-full bg-gradient-to-r ${program.color} text-white shadow-lg mb-6`}>
                    <span className="text-8xl">{program.icon}</span>
                  </div>
                  
                  <h4 className="text-3xl font-bold text-gray-800 mb-4">{program.title}</h4>
                  <p className="text-lg text-gray-700 mb-6 leading-relaxed">{program.description}</p>
                  
                  <div className="space-y-3">
                    {program.features.map((feature, index) => (
                      <div key={index} className="flex items-center justify-center space-x-3 text-lg">
                        <span>{feature.split(' ')[0]}</span>
                        <span>{feature.split(' ').slice(1).join(' ')}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* KG STEM Entrepreneurs Admission Section */}
      <section id="admissions" className="py-16 bg-gradient-to-r from-purple-600 to-pink-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-block mb-6">
              <div className="text-8xl mb-4 animate-bounce">🎓</div>
              <div className="bg-yellow-300 text-yellow-800 px-6 py-2 rounded-full font-bold text-xl animate-pulse inline-block">
                ADMISSIONS OPEN!
              </div>
            </div>
            
            <h3 className="text-5xl lg:text-6xl font-bold text-white mb-6">
              Kindergarten STEM Entrepreneurs
            </h3>
            <p className="text-2xl text-purple-100 mb-8 max-w-4xl mx-auto">
              Nurturing future innovators through hands-on AI, robotics, and entrepreneurship!
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="bg-white/20 backdrop-blur-sm rounded-3xl p-8 border-4 border-white/30">
              <div className="space-y-6">
                <div className="flex items-center space-x-4 p-4 bg-white/20 rounded-2xl">
                  <div className="text-4xl">📅</div>
                  <div>
                    <div className="text-xl font-bold text-white">Age Group</div>
                    <div className="text-purple-100">5-6 years old (Kindergarten)</div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4 p-4 bg-white/20 rounded-2xl">
                  <div className="text-4xl">⏰</div>
                  <div>
                    <div className="text-xl font-bold text-white">Schedule</div>
                    <div className="text-purple-100">2 sessions/week • 90 minutes each</div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4 p-4 bg-white/20 rounded-2xl">
                  <div className="text-4xl">🎯</div>
                  <div>
                    <div className="text-xl font-bold text-white">Program Length</div>
                    <div className="text-purple-100">12 weeks • Fall & Spring terms</div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4 p-4 bg-white/20 rounded-2xl">
                  <div className="text-4xl">🏫</div>
                  <div>
                    <div className="text-xl font-bold text-white">Location</div>
                    <div className="text-purple-100">Innovation Campus • 123 Tech Drive</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white/20 backdrop-blur-sm rounded-3xl p-8 border-4 border-white/30">
              <h4 className="text-3xl font-bold text-white mb-6 text-center">What Your Child Will Learn</h4>
              
              <div className="grid grid-cols-2 gap-4">
                {[
                  '🤖 Build robots',
                  '💻 Code friends',
                  '🧠 Think like AI',
                  '🎨 Create smart art',
                  '🏆 Solve challenges',
                  '🌟 Present creations',
                  '🤝 Team projects',
                  '💡 Invent solutions'
                ].map((item, index) => (
                  <div key={index} className="flex items-center space-x-3 p-3 bg-white/20 rounded-xl">
                    <span className="text-xl">{item.split(' ')[0]}</span>
                    <span className="text-white">{item.split(' ').slice(1).join(' ')}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Special Offer */}
          <div className="text-center">
            <div className="bg-yellow-300 text-yellow-900 rounded-3xl p-8 max-w-4xl mx-auto border-4 border-yellow-400 transform hover:scale-105 transition duration-300">
              <div className="text-6xl mb-4 animate-bounce">🎁</div>
              <h4 className="text-3xl font-bold mb-4">Early Bird Special!</h4>
              <p className="text-xl mb-6">
                Enroll by August 31st and get a FREE AI Maker Kit with your child&apos;s name!
              </p>
              <Link href={'/usai/apply'} className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-12 py-6 rounded-full text-2xl font-bold shadow-2xl hover:shadow-3xl transition transform hover:scale-110 animate-pulse">
                🎉 Apply Online Now!
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gradient-to-r from-blue-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h3 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
              Why We&apos;re Super Fun!
            </h3>
            <p className="text-xl text-gray-700">Learning feels like playing!</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            {[
              { icon: '🎮', label: 'Play & Learn', color: 'bg-gradient-to-br from-green-400 to-blue-500' },
              { icon: '🎨', label: 'Create Art', color: 'bg-gradient-to-br from-pink-400 to-purple-500' },
              { icon: '🏆', label: 'Win Games', color: 'bg-gradient-to-br from-yellow-400 to-orange-500' },
              { icon: '🌟', label: 'Show Off', color: 'bg-gradient-to-br from-blue-400 to-cyan-500' }
            ].map((item, index) => (
              <div 
                key={index} 
                className="text-center transform hover:scale-110 transition duration-300"
              >
                <div className={`${item.color} text-white p-8 rounded-3xl shadow-xl mb-4 transform hover:rotate-6 transition duration-300`}>
                  <div className="text-6xl">{item.icon}</div>
                </div>
                <div className="text-2xl font-bold text-gray-800">{item.label}</div>
              </div>
            ))}
          </div>

          {/* Small Class Benefits */}
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl mx-auto max-w-4xl transform hover:scale-105 transition duration-300">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div className="text-center lg:text-left">
                <h4 className="text-4xl font-bold text-gray-800 mb-6">Small Groups = Big Fun!</h4>
                <div className="grid grid-cols-3 gap-6">
                  <div className="bg-blue-50 rounded-2xl p-4 border-2 border-blue-100">
                    <div className="text-3xl font-bold text-blue-600 mb-1">5:1</div>
                    <div className="text-blue-800 font-medium">Ratio</div>
                  </div>
                  <div className="bg-purple-50 rounded-2xl p-4 border-2 border-purple-100">
                    <div className="text-3xl font-bold text-purple-600 mb-1">12</div>
                    <div className="text-purple-800 font-medium">Max Kids</div>
                  </div>
                  <div className="bg-green-50 rounded-2xl p-4 border-2 border-green-100">
                    <div className="text-3xl font-bold text-green-600 mb-1">98%</div>
                    <div className="text-green-800 font-medium">Happy</div>
                  </div>
                </div>
              </div>
              <div className="text-center">
                <div className="text-9xl animate-bounce">👩‍🏫</div>
                <div className="text-lg bg-gradient-to-r from-yellow-300 to-orange-400 text-yellow-900 px-4 py-2 rounded-full font-bold mt-4 animate-pulse inline-block">
                  🌈 Super Fun!
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h3 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
              Happy Makers!
            </h3>
            <p className="text-xl text-gray-700">Our young creators love it!</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index} 
                className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-3xl p-8 shadow-2xl text-center transform hover:scale-105 transition duration-300 border-4 border-white"
              >
                <div className="text-7xl mb-4">{testimonial.icon}</div>
                <blockquote className="text-2xl font-bold text-gray-800 mb-4 leading-relaxed italic">
                  &quot;{testimonial.quote}&quot;
                </blockquote>
                <div className="text-2xl font-bold text-purple-700 mb-2">{testimonial.name}</div>
                <div className="text-xl text-purple-600 mb-4">{testimonial.age} years old</div>
                <div className="flex justify-center space-x-1">
                  {[...Array(testimonial.stars)].map((_, i) => (
                    <span key={i} className="text-2xl text-yellow-400 animate-pulse" style={{ animationDelay: `${i * 200}ms` }}>
                      ⭐
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Events Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h3 className="text-4xl lg:text-5xl font-bold text-white mb-4">
              Coming Up! 🎉
            </h3>
            <p className="text-2xl text-blue-100">Fun events for everyone!</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {events.map((event, index) => (
              <div 
                key={index} 
                className="bg-white rounded-3xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105"
              >
                <div className={`text-white py-8 text-center ${event.color}`}>
                  <div className="text-7xl mb-2 animate-bounce">{event.icon}</div>
                  <div className="text-2xl font-bold">{event.date}</div>
                </div>
                <div className="p-8 text-center">
                  <h4 className="text-3xl font-bold text-gray-800 mb-4">{event.title}</h4>
                  <button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-full text-xl font-bold hover:shadow-lg transition w-full transform hover:scale-105">
                    Learn More 👉
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default App;
