

import { TestBed } from "@angular/core/testing";

import {
  HttpClientTestingModule,
  HttpTestingController,
} from "@angular/common/http/testing";

import { HttpErrorResponse } from "@angular/common/http";
import { MoviesService } from "./movies.service";

describe("Movies Service", () => {
  let coursesService: MoviesService,
    httpTestingController: HttpTestingController;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [MoviesService],
    });
    coursesService = TestBed.inject(MoviesService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });
  it("service created successfully", () => {
    expect(coursesService).toBeTruthy();
  });
  // it("Should retrieve all courses function", () => {
  //   coursesService.findAllCourses().subscribe((courses) => {
  //     expect(courses).toBeTruthy("No courses return");
  //     expect(courses?.length).toEqual(12, "Invalid number of courses");
  //   });
  //   const apiReq = httpTestingController.expectOne("/api/courses");
  //   expect(apiReq.cancelled).toBeFalsy();
  //   expect(apiReq.request.method).toBe("GET", "Invalid request type");
  //   expect(apiReq.request.responseType).toBe("json", "Invalid response type");
  //   apiReq.flush({ payload: Object.values(COURSES) });
  // });
  // it("Should find course by ID", () => {
  //   coursesService.findCourseById(12).subscribe((course) => {
  //     expect(course).toBeTruthy();
  //     expect(course.id).toBe(12);
  //   });
  //   const apiReq = httpTestingController.expectOne("/api/courses/12");
  //   expect(apiReq.cancelled).toBeFalsy();
  //   expect(apiReq.request.method).toBe("GET", "Invalid request");
  //   expect(apiReq.request.responseType).toBe("json", "Invalid response type");
  //   apiReq.flush(COURSES[12]);
  // });
  // it("Should save Course/Edit existing Course by ID", () => {
  //   coursesService
  //     .saveCourse(12, {
  //       titles: {
  //         description: "Update Course Description",
  //       },
  //       lessonsCount: 5,
  //     })
  //     .subscribe((course) => {
  //       expect(course).toBeTruthy("No updated course returned");
  //       expect(course.titles.description).toBe("Update Course Description");
  //       expect(course.lessonsCount).toEqual(5);
  //     });
  //   const apiReq = httpTestingController.expectOne("/api/courses/12");
  //   expect(apiReq.cancelled).toBeFalsy();
  //   expect(apiReq.request.method).toBe("PUT");
  //   expect(apiReq.request.body.titles.description).toEqual(
  //     "Update Course Description"
  //   );
  //   expect(apiReq.request.body.lessonsCount).toEqual(5);
  //   apiReq.flush({
  //     ...COURSES[12],
  //     titles: {
  //       description: "Update Course Description",
  //     },
  //     lessonsCount: 5,
  //   });
  // });

  // it("Should have failed with error code 404", () => {
  //   coursesService
  //     .saveCourse(50, {
  //       titles: {
  //         description: "Update Course Description",
  //       },
  //       lessonsCount: 5,
  //     })
  //     .subscribe(
  //       () => fail("Expected to be failed but got an successfull response!"),
  //       (error: HttpErrorResponse) => {
  //         expect(error.status).toBe(404);
  //       }
  //     );
  //   const apiReq = httpTestingController.expectOne("/api/courses/50");
  //   expect(apiReq.request.method).toBe("PUT");
  //   apiReq.flush(null, { status: 404, statusText: "Not Found" });
  // });

  // it("Should have failed with error code 500", () => {
  //   coursesService
  //     .saveCourse(50, {
  //       titles: {
  //         description: "Update Course Description",
  //       },
  //       lessonsCount: 5,
  //     })
  //     .subscribe(
  //       () => fail("Expected to be failed but got an successfull response!"),
  //       (error: HttpErrorResponse) => {
  //         expect(error.status).toBe(500);
  //       }
  //     );
  //   const apiReq = httpTestingController.expectOne("/api/courses/50");
  //   expect(apiReq.request.method).toBe("PUT");
  //   apiReq.flush(null, { status: 500, statusText: "Internal Server Error" });
  // });

  // it("should handle network error", () => {
  //   coursesService.findCourseById(50).subscribe(
  //     () => fail("Expected an error, but got a successful response"),
  //     (error) => {
  //       expect(error).toBeTruthy("No error received");
  //       // Additional error handling checks if needed
  //     }
  //   );

  //   const apiReq = httpTestingController.expectOne("/api/courses/50");
  //   expect(apiReq.request.method).toBe("GET", "Invalid request type");
  //   apiReq.error(new ErrorEvent("Network error"), {
  //     status: 0,
  //     statusText: "Network error",
  //   });
  // });

  // it("should handle custom error response", () => {
  //   coursesService.findCourseById(50).subscribe(
  //     () => fail("Expected an error, but got a successful response"),
  //     (error) => {
  //       expect(error.error).toEqual({ message: "Custom error message" });
  //       // Additional error handling checks if needed
  //     }
  //   );

  //   const apiReq = httpTestingController.expectOne("/api/courses/50");
  //   expect(apiReq.request.method).toBe("GET", "Invalid request type");
  //   apiReq.flush(
  //     { message: "Custom error message" },
  //     { status: 400, statusText: "Bad Request" }
  //   );
  // });

  // it("should find list of lessons on basis of course id and ", () => {
  //   coursesService.findLessons(12).subscribe((lessons) => {
  //     expect(lessons).toBeTruthy();
  //     expect(lessons.length).toBe(3);
  //   });
  //   const apiReq = httpTestingController.expectOne(
  //     (req) => req.url == "/api/lessons"
  //   );
  //   expect(apiReq.request.method).toBe("GET", "Invalid request type");
  //   expect(apiReq.request.params.get('courseId')).toEqual('12');
  //   expect(apiReq.request.params.get('filter')).toEqual('');
  //   expect(apiReq.request.params.get('sortOrder')).toEqual('asc');
  //   expect(apiReq.request.params.get('pageNumber')).toEqual('0');
  //   expect(apiReq.request.params.get('pageSize')).toEqual('3');
  //   apiReq.flush({ payload: findLessonsForCourse(12).slice(0,3) });
  // });

  afterEach(() => {
    httpTestingController.verify();
  });
});