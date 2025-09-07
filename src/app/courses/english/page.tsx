import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { englishCourses } from '@/data/courses';

export default function EnglishCoursesPage() {
  const categories = [
    {
      name: 'Grammar',
      description: 'Master English grammar rules and structure',
      courses: englishCourses.filter(course => course.subcategory === 'Grammar'),
      color: 'bg-green-500'
    },
    {
      name: 'Vocabulary',
      description: 'Expand your English word knowledge',
      courses: englishCourses.filter(course => course.subcategory === 'Vocabulary'),
      color: 'bg-blue-500'
    },
    {
      name: 'Conversation',
      description: 'Improve speaking and listening skills',
      courses: englishCourses.filter(course => course.subcategory === 'Conversation'),
      color: 'bg-purple-500'
    },
    {
      name: 'Beginner English',
      description: 'Start your English learning journey',
      courses: englishCourses.filter(course => course.subcategory === 'Beginner English'),
      color: 'bg-orange-500'
    }
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      {/* Page Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
          English Language Courses
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Master English communication skills with our comprehensive language courses. 
          From basic grammar to advanced conversation skills, we have everything you need to become fluent in English.
        </p>
      </div>

      {/* Course Categories */}
      <div className="space-y-16">
        {categories.map((category, index) => (
          <section key={category.name} className="space-y-8">
            {/* Category Header */}
            <div className="flex items-center space-x-4">
              <div className={`w-12 h-12 ${category.color} rounded-lg flex items-center justify-center text-white font-bold text-lg`}>
                {index + 1}
              </div>
              <div>
                <h2 className="text-3xl font-bold text-gray-900">{category.name}</h2>
                <p className="text-lg text-gray-600">{category.description}</p>
              </div>
            </div>

            {/* Courses Grid */}
            {category.courses.length > 0 ? (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {category.courses.map((course) => (
                  <Card key={course.id} className="group hover:shadow-xl transition-all duration-300 h-full flex flex-col">
                    <CardHeader className="p-0">
                      <div className="relative">
                        <img 
                          src={course.thumbnail} 
                          alt={course.title}
                          className="w-full h-48 object-cover rounded-t-lg"
                        />
                        <div className="absolute top-4 left-4">
                          <Badge className="bg-green-500">English</Badge>
                        </div>
                        <div className="absolute top-4 right-4">
                          <Badge variant="secondary" className="bg-white/90 text-gray-900">
                            {course.difficulty}
                          </Badge>
                        </div>
                        {course.freeLessonsCount > 0 && (
                          <div className="absolute bottom-4 left-4">
                            <Badge variant="outline" className="bg-white/90 text-green-600 border-green-600">
                              {course.freeLessonsCount} Free Lessons
                            </Badge>
                          </div>
                        )}
                      </div>
                    </CardHeader>
                    <CardContent className="p-6 flex-grow">
                      <CardTitle className="text-xl mb-3 group-hover:text-blue-600 transition-colors line-clamp-2">
                        {course.title}
                      </CardTitle>
                      <CardDescription className="text-gray-600 mb-4 line-clamp-3">
                        {course.description}
                      </CardDescription>
                      <div className="space-y-3">
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-gray-500">Instructor:</span>
                          <span className="font-medium">{course.instructor}</span>
                        </div>
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-gray-500">Duration:</span>
                          <span>{course.duration}</span>
                        </div>
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-gray-500">Lessons:</span>
                          <span>{course.lessonCount} lessons</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-1">
                            <span className="text-yellow-500">★</span>
                            <span className="text-sm font-medium">{course.rating}</span>
                            <span className="text-sm text-gray-500">({course.studentsEnrolled})</span>
                          </div>
                          <div className="text-right">
                            <div className="text-2xl font-bold text-green-600">${course.price}</div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter className="p-6 pt-0">
                      <div className="w-full space-y-2">
                        <Button className="w-full bg-green-600 hover:bg-green-700" asChild>
                          <Link href={`/courses/english/${course.id}`}>
                            View Course Details
                          </Link>
                        </Button>
                        {course.freeLessonsCount > 0 && (
                          <Button variant="outline" className="w-full text-sm" asChild>
                            <Link href={`/courses/english/${course.id}?preview=true`}>
                              Try Free Lessons
                            </Link>
                          </Button>
                        )}
                      </div>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <p className="text-gray-500 text-lg">More courses coming soon in this category!</p>
              </div>
            )}
          </section>
        ))}
      </div>

      {/* Learning Path Section */}
      <section className="mt-20 p-12 bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Suggested Learning Path
          </h2>
          <p className="text-xl text-gray-600">
            Follow this path to maximize your English learning progress
          </p>
        </div>
        <div className="grid md:grid-cols-4 gap-6">
          <div className="text-center">
            <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-lg">
              1
            </div>
            <h3 className="font-semibold text-lg mb-2">Start with Basics</h3>
            <p className="text-gray-600 text-sm">Begin with Beginner English or Grammar Fundamentals</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-lg">
              2
            </div>
            <h3 className="font-semibold text-lg mb-2">Build Vocabulary</h3>
            <p className="text-gray-600 text-sm">Expand your word knowledge with Vocabulary Building</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-lg">
              3
            </div>
            <h3 className="font-semibold text-lg mb-2">Practice Speaking</h3>
            <p className="text-gray-600 text-sm">Improve fluency with Conversation Skills</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-lg">
              4
            </div>
            <h3 className="font-semibold text-lg mb-2">Advanced Skills</h3>
            <p className="text-gray-600 text-sm">Perfect your English with advanced courses</p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <div className="text-center mt-20">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          Ready to Start Your English Journey?
        </h2>
        <p className="text-xl text-gray-600 mb-6 max-w-2xl mx-auto">
          Join thousands of students who have improved their English skills with our expert-designed courses. 
          Start with free lessons today!
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="bg-green-600 hover:bg-green-700 px-8">
            <Link href="/auth/signup">Start Free Today</Link>
          </Button>
          <Button size="lg" variant="outline" className="px-8">
            <Link href="/blog?category=english-tips">Browse English Tips</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}