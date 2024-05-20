import json
from channels.generic.websocket import AsyncWebsocketConsumer

class SpreadsheetConsumer(AsyncWebsocketConsumer):
    async def connect(self):
        await self.channel_layer.group_add(
            "spreadsheet_updates",
            self.channel_name
        )
        await self.accept()

    async def disconnect(self, close_code):
        await self.channel_layer.group_discard(
            "spreadsheet_updates",
            self.channel_name
        )

    async def spreadsheet_update(self, event):
        message = event['message']
        await self.send(text_data=json.dumps({
            'message': message
        }))
