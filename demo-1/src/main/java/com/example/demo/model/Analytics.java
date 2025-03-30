package com.example.demo.model;

import java.util.Date;
import org.springframework.data.annotation.Id;
import org.springframework.data.annotation.LastModifiedDate;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.Field;

import com.fasterxml.jackson.annotation.JsonFormat;

@Document(collection = "analytics")
public class Analytics {
    @Override
	public String toString() {
		return "Analytics [id=" + id + ", userId=" + userId + ", totalStudyHours=" + totalStudyHours
				+ ", completedTasks=" + completedTasks + ", focusSessions=" + focusSessions + ", notesCreated="
				+ notesCreated + ", lastUpdated=" + lastUpdated + "]";
	}

	@Id
    private String id;
    @Field("user_id")
	private String userId;
	@Field("total_study_hours")
    private int totalStudyHours;
	
	@Field("tasks_completed")
    private int completedTasks;
	@Field("focus_sessions_completed")
	private int focusSessions;
	@Field("notes_created")
    private int notesCreated;
	 public int getNotesCreated() {
		return notesCreated;
	}

	public void setNotesCreated(int notesCreated) {
		this.notesCreated = notesCreated;
	}

	@LastModifiedDate
	 @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "yyyy-MM-dd'T'HH:mm:ss.SSS'Z'", timezone = "UTC")
	 @Field("updated_at")
    private Date lastUpdated;

	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}

	public String getUserId() {
		return userId;
	}

	public void setUserId(String userId) {
		this.userId = userId;
	}

	public int getTotalStudyHours() {
		return totalStudyHours;
	}

	public void setTotalStudyHours(int totalStudyHours) {
		this.totalStudyHours = totalStudyHours;
	}

	public int getCompletedTasks() {
		return completedTasks;
	}

	public void setCompletedTasks(int completedTasks) {
		this.completedTasks = completedTasks;
	}

	public int getFocusSessions() {
		return focusSessions;
	}

	public void setFocusSessions(int focusSessions) {
		this.focusSessions = focusSessions;
	}

	public Date getLastUpdated() {
		return lastUpdated;
	}

	public void setLastUpdated(Date lastUpdated) {
		this.lastUpdated = lastUpdated;
	}


    public Analytics() {}

    
}
