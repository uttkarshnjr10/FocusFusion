package com.example.demo.model;

import java.util.Date;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.Field;

@Document(collection = "focus_sessions")
public class FocusSession {
   

	@Id
    private String id;
	@Field("user_id")
	private String userId;
	@Field("duration")
    private int duration; // in minutes
	@Field("started_at")
    private Date startTime;
	@Field("ended_at")
    private Date endTime;
    
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

	public int getDuration() {
		return duration;
	}

	public void setDuration(int duration) {
		this.duration = duration;
	}

	public Date getStartTime() {
		return startTime;
	}

	public void setStartTime(Date startTime) {
		this.startTime = startTime;
	}

	public Date getEndTime() {
		return endTime;
	}

	public void setEndTime(Date endTime) {
		this.endTime = endTime;
	}

	

    public FocusSession() {}

    @Override
   	public String toString() {
   		return "FocusSession [id=" + id + ", userId=" + userId + ", duration=" + duration + ", startTime=" + startTime
   				+ ", endTime=" + endTime + "]";
   	}
}

