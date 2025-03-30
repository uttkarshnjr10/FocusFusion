package com.example.demo.model;


import java.util.Date;
import java.util.List;

import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.Id;
import org.springframework.data.annotation.LastModifiedDate;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.Field;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonProperty;

@Document(collection = "planner")
public class Planner {
    

	@Id
    private String id;
	@Field("user_id")
	private String userId;
	@Field("time_frame")
    private String timeFrame; 
	@Field("tasks")
    private List<String> tasks;
	
	@CreatedDate
    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "yyyy-MM-dd'T'HH:mm:ss.SSS'Z'", timezone = "UTC")
    @Field("created_at")
    @JsonProperty("createdAt")
    private Date createdAt;

    @LastModifiedDate
    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "yyyy-MM-dd'T'HH:mm:ss.SSS'Z'", timezone = "UTC")
    @Field("updated_at")
    @JsonProperty("updatedAt")
    private Date updatedAt;
    
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

	public String getTimeFrame() {
		return timeFrame;
	}

	public void setTimeFrame(String timeFrame) {
		this.timeFrame = timeFrame;
	}

	public List<String> getTasks() {
		return tasks;
	}

	public void setTasks(List<String> tasks) {
		this.tasks = tasks;
	}

	public Date getCreatedAt() {
		return createdAt;
	}

	public void setCreatedAt(Date createdAt) {
		this.createdAt = createdAt;
	}

	public Date getUpdatedAt() {
		return updatedAt;
	}

	public void setUpdatedAt(Date updatedAt) {
		this.updatedAt = updatedAt;
	}

	

    public Planner() {}

    @Override
	public String toString() {
		return "Planner [id=" + id + ", userId=" + userId + ", timeFrame=" + timeFrame + ", tasks=" + tasks
				+ ", createdAt=" + createdAt + ", updatedAt=" + updatedAt + "]";
	}
}
