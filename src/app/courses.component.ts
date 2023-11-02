import {Component} from "@angular/core";

@Component({
    selector: "courses",
    template: `
    <h3>{{display_title()}}</h3>
    <ul>
        <li *ngFor="let course of courses; let i = index">
            {{course}}, {{i}}
        </li>
    </ul>
    `

})
export class CoursesComponent {
    title="List of different courses";
    courses = ["course1", "course2", "course3"];

    display_title() {
        return "Courses: " + this.title;
    }

}