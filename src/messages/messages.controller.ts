import { Controller, Get, Post, Body, Param } from '@nestjs/common';

@Controller('messages')
export class MessagesController {

    @Get()
    listMessages() {
        return 'listMessages';
    }

    @Post()
    createMessages(@Body() body: any) {
        console.log(body);
        return 'createMessages ' + body;
    }

    @Get('/:id')
    getMessage(@Param('id') id: string) {
        console.log(id);
        return 'getMessage ' + id;
    }

}
