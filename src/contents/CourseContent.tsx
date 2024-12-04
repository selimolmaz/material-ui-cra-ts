import React, { Suspense, useContext, useEffect, useState } from "react";

import { DepartmentContext } from "../context/DepartmentContext";
import { Box, Typography } from "@mui/material";
import CourseService from "../services/CourseService";
import CourseDTO from "../models/CourseDTO";

import { Swiper, SwiperSlide, } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import CourseCardView from "../components/course/CourseCardView";



const CourseContent: React.FC = () => {
    const { selectedDepartment } = useContext(DepartmentContext);
    const [courses, setCourses] = useState([] as CourseDTO[]);
    const [visibleSlides, setVisibleSlides] = useState<number[]>([]);

    useEffect(() => {
        const courseService = new CourseService();
        courseService.getCourseByDeptName(selectedDepartment.deptName).then(data => {
            setCourses(data);
        });
    }, [selectedDepartment.deptName]);

    const handleSlideChange = (swiper: any) => {
        const visibleSlides = [];
        for (let i = swiper.activeIndex; i < swiper.activeIndex + swiper.params.slidesPerView; i++) {
            visibleSlides.push(i);
        }
        setVisibleSlides(visibleSlides);
    };

    return (
        <Suspense fallback={<div>Loading...</div>}>
            <Typography component="h2" sx={{ mb: 2 }}>
                Courses of {selectedDepartment.deptName}
            </Typography>
            <Swiper
                spaceBetween={30}
                style={{ padding: '20px' }}
                pagination={{
                    clickable: true,
                }}
                breakpoints={{
                    200: {
                        slidesPerView: 1,
                        spaceBetween: 20,
                    },
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 30,
                    },
                    1024: {
                        slidesPerView: 3,
                        spaceBetween: 30,
                    },
                }}
                modules={[Pagination]}
                onSlideChange={handleSlideChange}
                onSwiper={handleSlideChange}
            >
                {courses.map((course, index) => (
                    <SwiperSlide key={`course-swiper-index-${index}`}>
                        <CourseCardView 
                            key={`course-card-view-${course.courseId}`} 
                            course={course} 
                            isVisible={visibleSlides.includes(index)} 
                        />
                    </SwiperSlide>))}
            </Swiper>
        </Suspense>
    );
}
export default CourseContent;