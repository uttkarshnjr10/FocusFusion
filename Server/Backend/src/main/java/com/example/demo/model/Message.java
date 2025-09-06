package com.example.demo.model;

import java.util.Date;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.Field;

import com.fasterxml.jackson.annotation.JsonFormat;

@Document(collection = "messages")
public class Message {
   	@Id
    private String id;
   	@Field("group_id")
    private String groupId;
   	@Field("sender_id")
    private String senderId;
   	@Field("content")
    private String content;
   	@JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "yyyy-MM-dd'T'HH:mm:ss.SSS'Z'", timezone = "UTC")
   	@Field("created_at")
    private Date timestamp;
    public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}

	public String getSenderId() {
		return senderId;
	}

	public void setSenderId(String senderId) {
		this.senderId = senderId;
	}

	public String getGroupId() {
		return groupId;
	}

	public void setGroupId(String groupId) {
		this.groupId = groupId;
	}

	public String getContent() {
		return content;
	}

	public void setContent(String content) {
		this.content = content;
	}

	public Date getTimestamp() {
		return timestamp;
	}

	public void setTimestamp(Date timestamp) {
		this.timestamp = timestamp;
	}

	

    public Message() {}

    @Override
   	public String toString() {
   		return "Message [id=" + id + ", senderId=" + senderId + ", groupId=" + groupId + ", content=" + content
   				+ ", timestamp=" + timestamp + "]";
   	}
}

