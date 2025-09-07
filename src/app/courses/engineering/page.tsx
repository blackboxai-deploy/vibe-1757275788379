import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { engineeringCourses } from '@/data/courses';

export default function EngineeringCoursesPage() {
  const categories = [
    {
      name: 'Basic Tools',
      description: 'Learn essential drawing tools and techniques',
      courses: engineeringCourses.filter(course => course.subcategory === 'Basic Tools'),
      color: 'bg-orange-500'
    },
    {
      name: 'Technical Drawing for Beginners',
      description: 'Master technical drawing principles',
      courses: engineeringCourses.filter(course => course.subcategory === 'Technical Drawing for Beginners'),
      color: 'bg-red-500'
    },
    {
      name: 'Orthographic Projections',
      description: 'Create accurate orthographic views',
      courses: engineeringCourses.filter(course => course.subcategory === 'Orthographic Projections'),
      color: 'bg-blue-500'
    },
    {
      name: 'Introduction to AutoCAD',
      description: 'Professional CAD software training',
      courses: engineeringCourses.filter(course => course.subcategory === 'Introduction to AutoCAD'),
      color: 'bg-purple-500'
    }
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      {/* Page Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
          Engineering Drawing Courses
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Master professional technical drawing skills and CAD software with our comprehensive engineering courses. 
          Learn industry-standard practices from experienced professionals.
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
                          <Badge className="bg-orange-600">Engineering</Badge>
                        </div>
                        <div className="absolute top-4 right-4">
                          <Badge variant="secondary" className="bg-white/90 text-gray-900">
                            {course.difficulty}
                          </Badge>
                        </div>
                        {course.freeLessonsCount > 0 && (
                          <div className="absolute bottom-4 left-4">
                            <Badge variant="outline" className="bg-white/90 text-orange-600 border-orange-600">
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
                            <div className="text-2xl font-bold text-orange-600">${course.price}</div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter className="p-6 pt-0">
                      <div className="w-full space-y-2">
                        <Button className="w-full bg-orange-600 hover:bg-orange-700" asChild>
                          <Link href={`/courses/engineering/${course.id}`}>
                            View Course Details
                          </Link>
                        </Button>
                        {course.freeLessonsCount > 0 && (
                          <Button variant="outline" className="w-full text-sm" asChild>
                            <Link href={`/courses/engineering/${course.id}?preview=true`}>
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
      <section className="mt-20 p-12 bg-gradient-to-r from-orange-50 to-red-50 rounded-2xl">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Professional Learning Path
          </h2>
          <p className="text-xl text-gray-600">
            Follow this progression to become a skilled technical draftsperson
          </p>
        </div>
        <div className="grid md:grid-cols-4 gap-6">
          <div className="text-center">
            <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-lg">
              1
            </div>
            <h3 className="font-semibold text-lg mb-2">Master Basic Tools</h3>
            <p className="text-gray-600 text-sm">Learn fundamental drawing instruments and techniques</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-lg">
              2
            </div>
            <h3 className="font-semibold text-lg mb-2">Technical Principles</h3>
            <p className="text-gray-600 text-sm">Understand drawing conventions and standards</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-lg">
              3
            </div>
            <h3 className="font-semibold text-lg mb-2">Projection Methods</h3>
            <p className="text-gray-600 text-sm">Master orthographic and isometric projections</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-lg">
              4
            </div>
            <h3 className="font-semibold text-lg mb-2">CAD Proficiency</h3>
            <p className="text-gray-600 text-sm">Become expert in professional CAD software</p>
          </div>
        </div>
      </section>

      {/* Industry Focus Section */}
      <section className="mt-20 bg-gray-900 text-white rounded-2xl p-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Industry-Standard Training</h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Our courses are designed by industry professionals and align with current workplace practices and standards.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="w-12 h-12 bg-orange-500 rounded-lg mx-auto mb-4 flex items-center justify-center">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold mb-2">ISO Standards</h3>
            <p className="text-gray-300">Learn international drawing standards used worldwide</p>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 bg-red-500 rounded-lg mx-auto mb-4 flex items-center justify-center">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold mb-2">Professional Tools</h3>
            <p className="text-gray-300">Master industry-standard software and techniques</p>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 bg-blue-500 rounded-lg mx-auto mb-4 flex items-center justify-center">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold mb-2">Career Ready</h3>
            <p className="text-gray-300">Skills that directly transfer to professional work</p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <div className="text-center mt-20">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          Start Your Engineering Career Today
        </h2>
        <p className="text-xl text-gray-600 mb-6 max-w-2xl mx-auto">
          Join professionals worldwide who trust our engineering drawing courses to advance their careers. 
          Start with free lessons and see the difference quality education makes.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="bg-orange-600 hover:bg-orange-700 px-8">
            <Link href="/auth/signup">Start Free Today</Link>
          </Button>
          <Button size="lg" variant="outline" className="px-8">
            <Link href="/blog?category=engineering-tips">Browse Engineering Tips</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}