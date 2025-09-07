import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { getFeaturedCourses, englishCourses, engineeringCourses } from '@/data/courses';
import { getFeaturedPosts } from '@/data/blog';

export default function Home() {
  const featuredCourses = getFeaturedCourses();
  const featuredPosts = getFeaturedPosts();

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative container mx-auto px-4 py-20 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                Master <span className="text-blue-200">English</span> & <span className="text-blue-200">Engineering Drawing</span>
              </h1>
              <p className="text-xl lg:text-2xl text-blue-100 leading-relaxed">
                Professional online courses with expert instructors. Learn at your own pace with interactive lessons, practical exercises, and industry-standard techniques.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-4 text-lg font-semibold">
                  <Link href="/courses">Explore All Courses</Link>
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 px-8 py-4 text-lg">
                  <Link href="#free-lessons">Try Free Lessons</Link>
                </Button>
              </div>
              <div className="flex items-center space-x-8 pt-4">
                <div className="text-center">
                  <div className="text-2xl font-bold">5,000+</div>
                  <div className="text-blue-200 text-sm">Students Enrolled</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold">4.8★</div>
                  <div className="text-blue-200 text-sm">Average Rating</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold">16</div>
                  <div className="text-blue-200 text-sm">Expert Courses</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="relative bg-white/10 rounded-2xl p-8 backdrop-blur-sm">
                <img 
                  src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/d94cedf8-5954-4ccc-8d7d-d1bee676b0d6.png" 
                  alt="Students learning English and Engineering Drawing online" 
                  className="rounded-xl shadow-2xl"
                />
                <div className="absolute -bottom-4 -right-4 bg-blue-500 rounded-xl p-4 shadow-lg">
                  <div className="text-white text-center">
                    <div className="text-lg font-bold">Free</div>
                    <div className="text-sm">Trial Lessons</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Course Categories */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Choose Your Learning Path
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Whether you want to master English communication or excel in technical drawing, 
              we have comprehensive courses designed by industry experts.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* English Courses Card */}
            <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
              <CardHeader className="pb-4">
                <div className="w-full h-48 bg-gradient-to-br from-green-400 to-blue-500 rounded-lg mb-4 relative overflow-hidden">
                  <img 
                    src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/ca487311-d365-442d-9826-095882dd3456.png" 
                    alt="English language learning materials and resources" 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                </div>
                <CardTitle className="text-2xl font-bold text-gray-900">English Language Courses</CardTitle>
                <CardDescription className="text-gray-600 text-lg">
                  Master English grammar, expand vocabulary, improve conversation skills, and build confidence in communication.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-4 bg-green-50 rounded-lg">
                    <div className="text-2xl font-bold text-green-600">{englishCourses.length}</div>
                    <div className="text-sm text-gray-600">Courses</div>
                  </div>
                  <div className="text-center p-4 bg-blue-50 rounded-lg">
                    <div className="text-2xl font-bold text-blue-600">108</div>
                    <div className="text-sm text-gray-600">Lessons</div>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span>Grammar Fundamentals</span>
                    <Badge variant="secondary">Beginner</Badge>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span>Vocabulary Building</span>
                    <Badge variant="secondary">Intermediate</Badge>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span>Conversation Skills</span>
                    <Badge variant="secondary">All Levels</Badge>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full bg-green-600 hover:bg-green-700" size="lg">
                  <Link href="/courses/english">Explore English Courses</Link>
                </Button>
              </CardFooter>
            </Card>

            {/* Engineering Drawing Courses Card */}
            <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
              <CardHeader className="pb-4">
                <div className="w-full h-48 bg-gradient-to-br from-orange-400 to-red-500 rounded-lg mb-4 relative overflow-hidden">
                  <img 
                    src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/8c5ae2bc-6133-4d14-9956-dc8bbbdb0ef7.png" 
                    alt="Engineering drawing tools, technical blueprints, and CAD software" 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                </div>
                <CardTitle className="text-2xl font-bold text-gray-900">Engineering Drawing Courses</CardTitle>
                <CardDescription className="text-gray-600 text-lg">
                  Learn technical drawing, master CAD software, and develop professional engineering documentation skills.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-4 bg-orange-50 rounded-lg">
                    <div className="text-2xl font-bold text-orange-600">{engineeringCourses.length}</div>
                    <div className="text-sm text-gray-600">Courses</div>
                  </div>
                  <div className="text-center p-4 bg-red-50 rounded-lg">
                    <div className="text-2xl font-bold text-red-600">93</div>
                    <div className="text-sm text-gray-600">Lessons</div>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span>Technical Drawing Basics</span>
                    <Badge variant="secondary">Beginner</Badge>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span>Orthographic Projections</span>
                    <Badge variant="secondary">Intermediate</Badge>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span>AutoCAD Training</span>
                    <Badge variant="secondary">Professional</Badge>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full bg-orange-600 hover:bg-orange-700" size="lg">
                  <Link href="/courses/engineering">Explore Engineering Courses</Link>
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>

      {/* Featured Courses */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Most Popular Courses
            </h2>
            <p className="text-xl text-gray-600">
              Join thousands of students who are already learning with our top-rated courses
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {featuredCourses.map((course) => (
              <Card key={course.id} className="group hover:shadow-lg transition-shadow duration-300">
                <CardHeader className="p-0">
                  <div className="relative">
                    <img 
                      src={course.thumbnail} 
                      alt={course.title}
                      className="w-full h-48 object-cover rounded-t-lg"
                    />
                    <div className="absolute top-4 right-4">
                      <Badge variant="secondary" className="bg-white/90 text-gray-900">
                        {course.difficulty}
                      </Badge>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="mb-2">
                    <Badge variant="outline" className="text-xs">
                      {course.category === 'english' ? 'English' : 'Engineering'}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl mb-2 group-hover:text-blue-600 transition-colors">
                    {course.title}
                  </CardTitle>
                  <CardDescription className="text-gray-600 mb-4">
                    {course.description.substring(0, 100)}...
                  </CardDescription>
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <span>{course.lessonCount} lessons</span>
                    <span>{course.duration}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-1">
                      <span className="text-yellow-500">★</span>
                      <span className="text-sm font-medium">{course.rating}</span>
                      <span className="text-sm text-gray-500">({course.studentsEnrolled})</span>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-blue-600">${course.price}</div>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="p-6 pt-0">
                  <Button className="w-full" asChild>
                    <Link href={`/courses/${course.category}/${course.id}`}>
                      View Course Details
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button size="lg" variant="outline" asChild>
              <Link href="/courses">View All Courses</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Free Lessons Section */}
      <section id="free-lessons" className="py-20 bg-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Start Learning Today - Free Lessons
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Try our courses risk-free with sample lessons. No credit card required, 
              just create your account and start learning immediately.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 max-w-4xl mx-auto shadow-lg">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white font-bold">1</div>
                </div>
                <h3 className="font-semibold text-lg mb-2">Create Free Account</h3>
                <p className="text-gray-600">Sign up in less than a minute with just your email address</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold">2</div>
                </div>
                <h3 className="font-semibold text-lg mb-2">Access Free Content</h3>
                <p className="text-gray-600">Browse our library of free introductory lessons and tutorials</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold">3</div>
                </div>
                <h3 className="font-semibold text-lg mb-2">Upgrade When Ready</h3>
                <p className="text-gray-600">Purchase full courses when you're ready to dive deeper</p>
              </div>
            </div>
            <div className="text-center mt-8">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 px-8">
                <Link href="/auth/signup">Start Free Today</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Learning Tips & Insights
            </h2>
            <p className="text-xl text-gray-600">
              Stay updated with the latest learning strategies and industry insights
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {featuredPosts.map((post) => (
              <Card key={post.id} className="group hover:shadow-lg transition-shadow duration-300">
                <CardHeader className="p-0">
                  <img 
                    src={post.thumbnail} 
                    alt={post.title}
                    className="w-full h-48 object-cover rounded-t-lg"
                  />
                </CardHeader>
                <CardContent className="p-6">
                  <div className="mb-2">
                    <Badge variant="outline" className="text-xs capitalize">
                      {post.category.replace('-', ' ')}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl mb-2 group-hover:text-blue-600 transition-colors">
                    {post.title}
                  </CardTitle>
                  <CardDescription className="text-gray-600 mb-4">
                    {post.excerpt}
                  </CardDescription>
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <span>By {post.author}</span>
                    <span>{post.readTime}</span>
                  </div>
                </CardContent>
                <CardFooter className="p-6 pt-0">
                  <Button variant="outline" className="w-full" asChild>
                    <Link href={`/blog/${post.id}`}>Read More</Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button size="lg" variant="outline" asChild>
              <Link href="/blog">View All Posts</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Ready to Start Your Learning Journey?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join thousands of successful students who have transformed their careers with our professional courses. 
            Get lifetime access to all course materials and expert support.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4">
              <Link href="/courses">Browse All Courses</Link>
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 px-8 py-4">
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}