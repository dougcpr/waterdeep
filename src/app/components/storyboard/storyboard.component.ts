import { Component, OnChanges, OnInit } from '@angular/core';
import { HttpService } from '../../services/http.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-storyboard',
  templateUrl: './storyboard.component.html',
  styleUrls: ['./storyboard.component.scss']
})

export class StoryboardComponent implements OnInit, OnChanges {
  storyboard: any;
  sideStory: any;
  factionMissions: any;
  newSideStory;
  constructor(
    private http: HttpService
  ) {}
  ngOnChanges(changes) {
    // do this update
    console.log(changes);
  }

  /** retrieve the main story and side stories created by the characters */
  ngOnInit() {
    this.newSideStory = '';
    this.http.getStoryBoard()
      .subscribe((chapters) => {
        this.storyboard = chapters;
      });
    this.http.getSideStory()
      .subscribe((sideStory) => {
        this.sideStory = sideStory;
      });
    this.http.getFactionMissions()
      .subscribe((factionStories) => {
        this.factionMissions = factionStories;
      });
  }
  /** update a check point covered by the characters */
  updateStoryBoard(chapter) {
    setTimeout(() => {
      this.http.updateStoryBoard(chapter)
        .subscribe(() => {});
    });
  }
  updateFactionMission(factionMission) {
    setTimeout(() => {
      this.http.updateFactionMission(factionMission)
        .subscribe(() => {});
    });
  }
  /** update a checkbox in the side story */
  updateSideStory(section) {
    setTimeout(() => {
      this.http.updateSideStory(section)
        .subscribe(() => {});
    });
  }
  /** add a story to the side story collection */
  addStory(mission, story) {
    const obj = {
      mission: mission,
      checked: false
    };
    story.sections.push(obj);
    setTimeout(() => {
      this.http.updateSideStory(story)
        .subscribe(() => {
          this.ngOnInit();
        });
    });
  }
  /** remove the side story from the collection */
  removeStory(story, i) {
    story.sections.splice(i, 1);
    setTimeout(() => {
      this.http.updateSideStory(story)
        .subscribe(() => {
          this.ngOnInit();
        });
    });
  }
}
