import React, { Component } from 'react'
// import { connect } from 'react-redux'
import { Button, Card, Media, Image, Title, SubTitle, Content } from 'reactbulma'

export default function MentorList({ data, updateData ,deleteMentor}) {

    let addTask = (name) => {
        console.log(name);
        let task = prompt('Enter Tasks for ' + name);
        console.log(task);
        updateData({ name, task });
    }


    return (

        <Card>
            {/* <Card.Image src='http://bulma.io/images/placeholders/1280x960.png' ratio='4by3' /> */}
            <Card.Content>
                <Media>
                    <Media.Left>
                        <Image is='48x48' src={data.img} alt="Image" />
                    </Media.Left>
                    <Media.Content>
                        <Title is='4'>{data.name}</Title>
                        <SubTitle is='5'>{data.occupation}</SubTitle>
                        <SubTitle is='6'>{data.collage}</SubTitle>
                    </Media.Content>
                </Media>
                <Content>
                    Tasks:{(data.tasks||[]).join()}
                    <Button onClick={() => addTask(data.name)}>add Task</Button>
                </Content>
                <Content>
                <Button danger onClick={() => deleteMentor(data.name)}>Delete</Button>
                
                </Content>
            </Card.Content>
        </Card>
    )

}

