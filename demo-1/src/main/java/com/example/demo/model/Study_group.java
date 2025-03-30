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

@Document(collection = "study_groups")
public class Study_group {
 

	@Id
    private String id;
	@Field("group_name")
	private String groupName;
	@Field("target_exam")
    private String targetExam;
	@Field("created_by")
    private String createdBy;
	@Field("members")
    private List<String> members;
	@Field("messages")
    private List<String> messages;
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

	public String getGroupName() {
		return groupName;
	}

	public void setGroupName(String groupName) {
		this.groupName = groupName;
	}

	public String getTargetExam() {
		return targetExam;
	}

	public void setTargetExam(String targetExam) {
		this.targetExam = targetExam;
	}

	public String getCreatedBy() {
		return createdBy;
	}

	public void setCreatedBy(String createdBy) {
		this.createdBy = createdBy;
	}

	public List<String> getMembers() {
		return members;
	}

	public void setMembers(List<String> members) {
		this.members = members;
	}

	public List<String> getMessages() {
		return messages;
	}

	public void setMessages(List<String> messages) {
		this.messages = messages;
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

	

    public Study_group() {}

    @Override
 	public String toString() {
 		return "Study_group [id=" + id + ", groupName=" + groupName + ", targetExam=" + targetExam + ", createdBy="
 				+ createdBy + ", members=" + members + ", messages=" + messages + ", createdAt=" + createdAt
 				+ ", updatedAt=" + updatedAt + "]";
 	}
}
