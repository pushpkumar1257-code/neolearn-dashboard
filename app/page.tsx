import Sidebar from "../components/sidebar";
import HeroCard from "../components/hero-card";
import CourseCard from "../components/course-card";
import ActivityCard from "../components/activity-card";
import CourseSkeleton from "../components/course-skeleton";
import StaggerWrapper from "../components/stagger-wrapper";
import { supabase } from "../lib/supabase";
import { Suspense } from "react";

export default async function Home() {
  const { data: courses, error } = await supabase
    .from("courses")
    .select("*");

  console.log("COURSES:", courses);

  if (error) {
    console.error("Supabase Error:", error);
  }

  const safeCourses = courses ?? [];

  const activeCourses = safeCourses.filter(
    (course) => Number(course.progress || 0) > 0
  );

  const completedCourses = safeCourses.filter(
    (course) => Number(course.progress || 0) === 100
  );

  return (
    <main className="relative overflow-hidden min-h-screen bg-[#0a0a0a] text-white flex">

      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-500/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-cyan-500/10 blur-[120px] rounded-full pointer-events-none" />

      <Sidebar />

      <section className="relative z-10 flex-1 p-4 md:p-8 overflow-y-auto">

        <h1 className="text-4xl md:text-6xl font-bold mb-8">
          Welcome Back 👋
        </h1>

        <HeroCard />

        <div className="grid grid-cols-12 gap-6 mt-8">

          <div className="col-span-12 lg:col-span-8">

            <h2 className="text-2xl font-semibold mb-4">
              Active Courses
            </h2>

            <Suspense
              fallback={
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {Array(4)
                    .fill(0)
                    .map((_, i) => (
                      <CourseSkeleton key={i} />
                    ))}
                </div>
              }
            >
              <StaggerWrapper className="grid grid-cols-1 md:grid-cols-2 gap-5">

                {activeCourses.length > 0 ? (
                  activeCourses.map((course) => (
                    <CourseCard
                      key={course.id}
                      title={course.title}
                      progress={Number(course.progress || 0)}
                      icon_name={course.icon_name}
                    />
                  ))
                ) : (
                  <div className="bg-zinc-900/60 border border-white/10 rounded-3xl p-10 text-center col-span-full">

                    <h3 className="text-2xl font-semibold mb-2">
                      No Courses Yet
                    </h3>

                    <p className="text-zinc-400">
                      Add courses in Supabase to see them here.
                    </p>

                  </div>
                )}

              </StaggerWrapper>
            </Suspense>

          </div>

          <div className="col-span-12 lg:col-span-4">
            <ActivityCard />
          </div>

          <div className="col-span-12 mt-4">

            <h2 className="text-2xl font-semibold mb-4">
              Completed Courses
            </h2>

            <Suspense
              fallback={
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {Array(3)
                    .fill(0)
                    .map((_, i) => (
                      <CourseSkeleton key={i} />
                    ))}
                </div>
              }
            >
              <StaggerWrapper className="grid grid-cols-1 md:grid-cols-3 gap-5">

                {completedCourses.length > 0 ? (
                  completedCourses.map((course) => (
                    <CourseCard
                      key={course.id}
                      title={course.title}
                      progress={Number(course.progress || 0)}
                      icon_name={course.icon_name}
                    />
                  ))
                ) : (
                  <div className="bg-zinc-900/60 border border-white/10 rounded-3xl p-10 text-center col-span-full">

                    <h3 className="text-2xl font-semibold mb-2">
                      No Completed Courses
                    </h3>

                    <p className="text-zinc-400">
                      Complete a course to see it here.
                    </p>

                  </div>
                )}

              </StaggerWrapper>
            </Suspense>

          </div>

        </div>

      </section>
    </main>
  );
}